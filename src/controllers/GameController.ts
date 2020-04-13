import Game from "../models/Game";
import MapProperties from "../Types/MapProperties";
import PlayersController from "./PlayersController";

export default class GameController {
  _gameLevel: number;
  _model: Game;
  _playersController: PlayersController;

  constructor(mapProperties: MapProperties, gameLevel: number) {
    this._gameLevel = gameLevel;
    this._model = new Game(mapProperties, this._gameLevel);
    this._playersController = new PlayersController(this, this._model._players);
    //    this._fruitController = null;
    //    this._mapController - null;
  }

  get playerController(): PlayersController {
    return this._playersController;
  }

  get model(): Game {
    return this._model;
  }

  /*  _createFruits(gameLevel: number) {
    const [positionX, positionY] = this._getRandomLocationInMap();
    setInterval(() => {
      this._fruits.push(new Fruit(positionX, positionY));
    }, gameLevel * 1000);
  }*/
}
