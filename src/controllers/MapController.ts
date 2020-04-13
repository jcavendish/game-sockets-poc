import Game from "../models/Game";
import GameMap from "../models/GameMap";
import GameController from "./GameController";

export default class MapController {
  _game: GameController;

  constructor(game: GameController) {
    this._game = game;
  }
}
