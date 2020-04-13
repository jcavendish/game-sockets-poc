import express from "express";
import socketio from "socket.io";
import http from "http";
import GameController from "./controllers/GameController";
import MapProperties from "./Types/MapProperties";
import path from "path";
import Command from "./Types/Command";

export const app = express();
app.use(express.static(path.join(__dirname, "public")));
export const server = http.createServer(app);
export const sockets = socketio(server);

app.use(express.json());

//let gameController: GameController | null = null;

let gameController = new GameController({ width: 30, height: 30 }, 3);
app.post("/init", (request, response) => {
  const mapSize: MapProperties = request.body.mapSize;
  const level: number = request.body.level;

  gameController = new GameController(mapSize, level);

  response.sendStatus(201);
});

app.get("/", (request, response) => {
  response.json({ message: "Hello world" });
});

sockets.on("connection", (socket) => {
  gameController.playerController.subscribe(socket.id, (command: Command) => {
    socket.emit(command.type, command.subject);
  });

  if (gameController) {
    socket.emit("setup", gameController.model);
    gameController.playerController.addPlayer(socket.id);
  }
  socket.on("disconnect", () => {
    if (gameController) {
      gameController.playerController.removePlayer(socket.id);
      gameController.playerController.unsub(socket.id);
    }
  });
});
