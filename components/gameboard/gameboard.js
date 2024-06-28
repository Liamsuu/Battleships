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

  randomiseBoard() {
    const directions = ["horizontal", "vertical"];
    const positions = [];

    // push all positions to arr
    for (let x = 0; x < 100; x++) {
      if (x < 10) {
        positions.push([0, x]);
      } else if (x >= 10 && x < 20) {
        positions.push([1, x % 10]);
      } else if (x >= 20 && x < 30) {
        positions.push([2, x % 10]);
      } else if (x >= 30 && x < 40) {
        positions.push([3, x % 10]);
      } else if (x >= 40 && x < 50) {
        positions.push([4, x % 10]);
      } else if (x >= 50 && x < 60) {
        positions.push([5, x % 10]);
      } else if (x >= 60 && x < 70) {
        positions.push([6, x % 10]);
      } else if (x >= 70 && x < 80) {
        positions.push([7, x % 10]);
      } else if (x >= 80 && x < 90) {
        positions.push([8, x % 10]);
      } else if (x >= 90 && x < 100) {
        positions.push([9, x % 10]);
      }
    }
    for (let x = 0; x < 5; x++) {
      const lengths = Math.floor(Math.random() * (5 - 2 + 1) + 2); // generate random length between 2 and 5
      try {
        const randomPosition =
          positions[Math.floor(Math.random() * positions.length)];
        const randomDirection =
          directions[Math.floor(Math.random() * directions.length)];
        this.setShipPosition(
          randomPosition[0],
          randomPosition[1],
          randomDirection,
          lengths
        );
      } catch (error) {
        // error is likely position is taken so just redo that random selection
        console.log(error);
        x -= 1; // redo loop
      }
    }
  }

  resetBoard() {
    this.gameboard.forEach((childArr) => {
      childArr.forEach((node) => {
        childArr.splice(childArr.indexOf(node), 1, new Node());
      });
    });
  }

  getShipPositions() {
    let positions = [];
    this.gameboard.forEach(function callback(innerArr, arrIndex) {
      innerArr.forEach(function callback(node, nodeIndex) {
        if (node.isShipPresent() !== null) {
          positions.push([arrIndex, nodeIndex]);
        }
      });
    });
    return positions;
  }

  getHitPositions() {
    let positions = [];
    this.gameboard.forEach(function callback(innerArr, arrIndex) {
      innerArr.forEach(function callback(node, nodeIndex) {
        if (node.isHit() === true) {
          positions.push([arrIndex, nodeIndex]);
        }
      });
    });
    return positions;
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
