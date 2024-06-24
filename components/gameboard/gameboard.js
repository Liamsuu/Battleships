import Node from "../node/node";
import Ship from "../ships/ships";

export default class Gameboard {
  constructor() {
    this.gameboard = [
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
      [
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
        new Node(),
      ],
    ];
  }

  setShipPosition(posX = 0, posY = 0, direction = "", shipLen = 2) {
    // will need to check there's no ship in either spot at a later date
    direction.toLowerCase();
    const ship = new Ship(shipLen);
    if (direction === "vertical") {
      switch (shipLen) {
        case 2:
          if (this.gameboard[posX - 1] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            break;
          }

        case 3:
          if (this.gameboard[posX - 2] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            this.gameboard[posX - 2][posY].setShip(ship);
            break;
          }

        case 4:
          if (this.gameboard[posX - 3] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            this.gameboard[posX - 2][posY].setShip(ship);
            this.gameboard[posX - 3][posY].setShip(ship);
            break;
          }

        case 5:
          if (this.gameboard[posX - 4] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            this.gameboard[posX - 2][posY].setShip(ship);
            this.gameboard[posX - 3][posY].setShip(ship);
            this.gameboard[posX - 4][posY].setShip(ship);
            break;
          }

        default:
          // if the length is greater than the biggest ship(5)
          throw "Invalid position";
      }
    } else if (direction === "horizontal") {
      switch (shipLen) {
        case 2:
          if (this.gameboard[posX][posY + 1] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            break;
          }

        case 3:
          if (this.gameboard[posX][posY + 2] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            this.gameboard[posX][posY + 2].setShip(ship);
            break;
          }

        case 4:
          if (this.gameboard[posX][posY + 3] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            this.gameboard[posX][posY + 2].setShip(ship);
            this.gameboard[posX][posY + 3].setShip(ship);
            break;
          }

        case 5:
          if (this.gameboard[posX][posY + 4] !== undefined) {
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            this.gameboard[posX][posY + 2].setShip(ship);
            this.gameboard[posX][posY + 3].setShip(ship);
            this.gameboard[posX][posY + 4].setShip(ship);
            break;
          }

        default:
          throw "Invalid position";
      }
    } else {
      throw "Invalid direction(horizontal or vertical).";
    }
  }
}
