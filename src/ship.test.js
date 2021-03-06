import Ship from "./ship";

test("ship length", () => {
  const newShip = new Ship(10);
  expect(newShip.shipLength).toBe(10);
});

test("ship sunk", () => {
  const newShip = new Ship(10);
  newShip.hits = 10;
  newShip.hasSunk();
  expect(newShip.sunk).toBe(true);
});

test("ship not sunk", () => {
  const newShip = new Ship(8, 7);
  newShip.hasSunk();
  expect(newShip.sunk).toBe(false);
});
