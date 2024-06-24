import Ship from "../ships/ships";
import Gameboard from "./gameboard";

describe("Creation of gameboard and methods", () => {
  test("Positions horizontal pieces correctly", () => {
    const game = new Gameboard();
    game.setShipPosition(0, 0, "horizontal", 5);
    expect(game.gameboard[0][0].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[0][1].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[0][2].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[0][3].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[0][4].isShipPresent()).toBeInstanceOf(Ship);
  });

  test("Incorrect horizontal position handles error", () => {
    const game = new Gameboard();
    expect(() => {
      game.setShipPosition(0, 6, "horizontal", 5);
    }).toThrow("Invalid position");
  });

  test("Positions vertical pieces correctly", () => {
    const game = new Gameboard();
    game.setShipPosition(4, 0, "vertical", 5);
    expect(game.gameboard[0][0].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[1][0].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[2][0].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[3][0].isShipPresent()).toBeInstanceOf(Ship);
    expect(game.gameboard[4][0].isShipPresent()).toBeInstanceOf(Ship);
  });

  test("Incorrect vertical position handles error", () => {
    const game = new Gameboard();
    expect(() => {
      game.setShipPosition(0, 0, "vertical", 5);
    }).toThrow("Invalid position");
  });

  test("Incorrect direction handles error", () => {
    const game = new Gameboard();
    expect(() => {
      game.setShipPosition(0, 0, "wrongdirection", 5);
    }).toThrow("Invalid direction(horizontal or vertical).");
  });
});
