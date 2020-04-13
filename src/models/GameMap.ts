import MapProperties from "../Types/MapProperties";

export default class GameMap {
  _width: number;
  _height: number;
  constructor(mapProperties: MapProperties) {
    this._width = mapProperties.width;
    this._height = mapProperties.height;
  }

  validateCoordinates(x: number, y: number): boolean {
    return this._validateX(x) && this._validateY(y);
  }

  getRandomLocation(): number[] {
    const positionX = Math.random() * this._width;
    const positionY = Math.random() * this._height;
    return [positionX, positionY];
  }

  _validateX(x: number): boolean {
    if (x <= 0 || x >= this._width) {
      return false;
    }
    return true;
  }

  _validateY(y: number): boolean {
    if (y <= 0 || y >= this._height) {
      return false;
    }
    return true;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
}
