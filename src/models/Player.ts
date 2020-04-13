export default class Player {
  _id: string;
  _x: number;
  _y: number;
  _score: number;
  _size: number;

  constructor(id: string, initalX: number, initialY: number) {
    this._id = id;
    this._x = Math.floor(initalX);
    this._y = Math.floor(initialY);
    this._score = 0;
    this._size = 10;
  }

  get id(): string {
    return this._id;
  }

  moveUp(): void {
    this._y++;
  }

  moveDown(): void {
    this._y--;
  }

  moveRight(): void {
    this._x++;
  }

  moveLeft(): void {
    this._x--;
  }

  addScore(): void {
    this._score++;
  }

  get score(): number {
    return this._score;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }
}
