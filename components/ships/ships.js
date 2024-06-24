export default class Ship {
  constructor(length, hits = 0, sunk = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  hit() {
    this.hits += 1;
  }

  getHits() {
    return this.hits;
  }

  isSunk() {
    return this.hits === this.length;
  }

  setSunk() {
    this.sunk = true;
  }
}
