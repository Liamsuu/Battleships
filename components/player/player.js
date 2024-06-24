import Gameboard from "../gameboard/gameboard";

export default class Player {
  constructor(realPlayer = true) {
    this.realPlayer = realPlayer;
    this.playerBoard = new Gameboard();
  }
}
