export default class Stateful {
  constructor() {
    this.state = null;
  }
  setState(newState) {
    this.state = newState;
    this.render();
    console.log(this.state);
  }

  render() {
    throw Error(
      "The render function must be implemented in stateful components"
    );
  }
}
