import Player from "./Player";

export default class Ranking {
  _players: Player[];
  _length: number;
  constructor(players: Player[]) {
    this._players = players;
    this._length = players.length;
  }

  get players(): Player[] {
    return this._players.sort((a, b) => a.score - b.score);
  }
}
