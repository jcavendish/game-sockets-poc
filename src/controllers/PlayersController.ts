import Player from "../models/Player";
import GameController from "./GameController";
import Subscriper from "../lib/Subscriber";

export default class PlayersController extends Subscriper {
  _game: GameController;
  _model: Player[];
  constructor(game: GameController, model: Player[]) {
    super();
    this._game = game;
    this._model = model;
  }

  addPlayer(id: string) {
    const gameMap = this._game.model.map;
    const [x, y] = gameMap.getRandomLocation();
    const player = new Player(id, x, y);
    if (gameMap.validateCoordinates(player.x, player.y)) {
      this._model.push(player);
    }
    this._notifyAll({
      type: "add-player",
      subject: player,
    });
  }

  removePlayer(id: string) {
    const playerIdx = this._model.findIndex((player) => player.id === id);
    const player = this._model[playerIdx];
    this._model.splice(playerIdx, 1);
    this._notifyAll({
      type: "remove-player",
      subject: player,
    });
  }
}
