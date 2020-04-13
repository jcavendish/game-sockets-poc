import Subscription from "../Types/Subscription";
import Command from "../Types/Command";

export default class Subscriper {
  _subscribers: Subscription[];
  constructor() {
    this._subscribers = [];
  }

  subscribe(id: string, apply: Function) {
    this._subscribers.push({ id, apply });
  }

  unsub(id: string) {
    this._subscribers = this._subscribers.filter(
      (subscription) => subscription.id !== id
    );
  }

  _notifyAll(command: Command) {
    console.log(`Notifyng ${this._subscribers.length} subscribers`);
    for (let subscriber of this._subscribers) {
      subscriber.apply(command);
    }
  }
}
