import Stateful from "./Stateful.js";
import playerController from "./PlayerController.js";

export default class Game extends Stateful {
  constructor(id) {
    super();
    console.log(id);
    this._id = id;
  }
  createGame(data) {
    const body = document.querySelector("body");
    const canvasTemplate = `<canvas id="canvas" width='${data._map._width}' height='${data._map._height}'></canvas>`;
    body.innerHTML = canvasTemplate;
    const canvas = document.querySelector("#canvas");
    console.log(canvas);
    this.setState(data);

    body.addEventListener("keydown", (e) => {
      this.movePlayer(e);
    });
  }
  addPlayer(player) {
    if (this.state) {
      this.setState({
        ...this.state,
        _players: [...this.state._players, player],
      });
    }
  }
  removePlayer(player) {
    if (this.state) {
      this.setState({
        ...this.state,
        _players: [
          ...this.state._players.filter((each) => each._id !== player._id),
        ],
      });
    }
  }
  movePlayer(e) {
    if (this.state) {
      const myPlayerIdx = this.state._players.findIndex(
        (player) => player._id === this._id
      );
      console.log(`My id=${this._id}, my index=${myPlayerIdx}`);
      const move = playerController[e.key];
      if (move) {
        move(this.state._players[myPlayerIdx]);
      }

      this.setState({
        ...this.state,
        _players: [...this.state._players],
      });
    }
  }
  render() {
    this.drawMap(this.state._map);
    this.drawPlayers(this.state._players);
    this.drawFruits(this.state._fruits);
  }

  drawMap(map) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, Number(map._width), Number(map._height));

    const ctx = canvas.getContext("2d");
    ctx.strokeRect(0, 0, Number(map._width), Number(map._height));
  }

  drawPlayers(players) {
    for (let player of players) {
      const playerCtx = canvas.getContext("2d");
      playerCtx.fillStyle = "#FF0000";
      playerCtx.fillRect(player._x, player._y, player._size, player._size);
      //playerCtx.scale(10, 10);
    }
  }

  drawFruits(fruits) {
    const fruitCtx = canvas.getContext("2d");
    fruitCtx.fillStyle = "#00FF55";

    for (let fruit of fruits) {
      fruitCtx.fillRect(fruit._x, fruit._y, 1, 1);
    }
  }
}
