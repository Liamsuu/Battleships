import Ship from "./ships";

describe("Ship method and properties", () => {
  const ship = new Ship(3);
  test("Created with correct properties defined", () => {
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test("Increases hit number when called", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test("Announces sunken ship correctly", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
