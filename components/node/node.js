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

  setHit() {}
}
