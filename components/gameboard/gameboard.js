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

  checkPosTaken(posX, posY, len, direction) {
    switch (direction) {
      case "horizontal":
        for (let x = 0; x < len; x++) {
          if (this.gameboard[posX][posY + x].isShipPresent() !== null) {
            return true;
          }
        }
        return false;

      case "vertical":
        for (let x = 0; x < len; x++) {
          // will just check if positions are already taken
          if (this.gameboard[posX - x][posY].isShipPresent() !== null) {
            return true;
          }
        }
        return false;

      default:
        throw "Something went wrong..(check position was typed correctly)";
    }
  }

  setShipPosition(posX = 0, posY = 0, direction = "", shipLen = 2) {
    // will need to check there's no ship in either spot at a later date
    direction.toLowerCase();
    const ship = new Ship(shipLen);
    if (direction === "vertical") {
      switch (shipLen) {
        case 2:
          if (this.gameboard[posX - 1] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            break;
          }

        case 3:
          if (this.gameboard[posX - 2] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            this.gameboard[posX - 2][posY].setShip(ship);
            break;
          }

        case 4:
          if (this.gameboard[posX - 3] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX - 1][posY].setShip(ship);
            this.gameboard[posX - 2][posY].setShip(ship);
            this.gameboard[posX - 3][posY].setShip(ship);
            break;
          }

        case 5:
          if (this.gameboard[posX - 4] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
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
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            break;
          }

        case 3:
          if (this.gameboard[posX][posY + 2] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            this.gameboard[posX][posY + 2].setShip(ship);
            break;
          }

        case 4:
          if (this.gameboard[posX][posY + 3] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
            this.gameboard[posX][posY].setShip(ship);
            this.gameboard[posX][posY + 1].setShip(ship);
            this.gameboard[posX][posY + 2].setShip(ship);
            this.gameboard[posX][posY + 3].setShip(ship);
            break;
          }

        case 5:
          if (this.gameboard[posX][posY + 4] !== undefined) {
            if (this.checkPosTaken(posX, posY, shipLen, direction) === true) {
              throw "Position taken";
            }
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
      throw "Invalid direction";
    }
  }

  receiveAttack(posX, posY) {
    this.gameboard[posX][posY].setHit();
  }

  allShipsSunk() {
    // iterate through the array
    for (let array of this.gameboard) {
      // iterate through the inside array
      for (let node of array) {
        // if node contains ship a ship
        if (node.isShipPresent() !== null) {
          // if the ship is not sunk, not all ships are sunk
          if (!node.isShipPresent().isSunk()) {
            return false;
          }
        }
      }
    }
    // after checking all of them, if it reaches here they have all been sunk
    return true;
  }
}
