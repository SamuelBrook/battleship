import Gameboard from "./gameboard";

test("locations of ships", () => {
  let shipCoordinates = [
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
  ];
  let gameBoard = new Gameboard(shipCoordinates);
  gameBoard.callShips();
  gameBoard.placeShips();
  expect(gameBoard.placedShipLocations[0][0][0]).toBe(1);
  expect(gameBoard.placedShipLocations[0][0][2]).toBe(3);
  expect(gameBoard.placedShipLocations[0][1][0]).toBe(5);
});

test("hit received", () => {
  let shipCoordinates = [
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
    [1, 5],
  ];
  let gameBoard = new Gameboard(shipCoordinates);
  gameBoard.callShips();
  gameBoard.placeShips();
  let shotCoordinate1 = [1, 5];
  let shotCoordinate2 = [4, 5];
  gameBoard.attackReceived(shotCoordinate1);
  expect(gameBoard.shipArray[0].hits).toBe(1);

  gameBoard.attackReceived(shotCoordinate2);
  expect(gameBoard.shipArray[0].hits).toBe(2);
});
