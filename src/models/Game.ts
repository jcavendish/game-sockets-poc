import MapProperties from "../Types/MapProperties";
import GameMap from "./GameMap";
import Ranking from "./Ranking";
import Player from "./Player";
import Fruit from "./Fruit";

export default class Game {
  _players: Player[];
  _map: GameMap;
  _fruits: Fruit[];
  _ranking: Ranking;

  constructor(mapProperties: MapProperties, gameLevel: number) {
    this._players = [];
    this._map = new GameMap(mapProperties);
    this._fruits = [];
    this._ranking = new Ranking(this._players);
  }

  get ranking(): Ranking {
    return this._ranking;
  }

  get players(): Player[] {
    return this._players;
  }

  get map(): GameMap {
    return this._map;
  }

  addFruits(fruit: Fruit) {
    if (this._map.validateCoordinates(fruit.x, fruit.y)) {
      this._fruits.push(fruit);
    }
  }
}
