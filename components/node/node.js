export default class Node {
  constructor(shipObjPresent = null, hit = false) {
    this.shipObjPresent = shipObjPresent;
    this.hit = hit;
  }

  isShipPresent() {
    return this.shipObjPresent;
  }

  setShip(shipObj) {
    this.shipObjPresent = shipObj;
  }

  setHit() {
    // sets location as hit, and adds a hit to a ship if present
    if (this.isShipPresent() !== null) {
      this.isShipPresent().hit();
    }
    this.hit = true;
  }

  isHit() {
    return this.hit;
  }
}
