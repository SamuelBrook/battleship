import Gameboard from "./gameboard";

test("locations of ships", () => {
  const shipCoordinates = [
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
  const gameBoard = new Gameboard();
  gameBoard.callShips();
  gameBoard.placeShips(shipCoordinates);
  expect(gameBoard.placedShipLocations[0][0][0]).toBe(1);
  expect(gameBoard.placedShipLocations[0][0][2]).toBe(3);
  expect(gameBoard.placedShipLocations[0][1][0]).toBe(5);
});

test("hit received", () => {
  const shipCoordinates = [
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
  const gameBoard = new Gameboard();
  gameBoard.callShips();
  gameBoard.placeShips(shipCoordinates);
  const shotCoordinate1 = [1, 5];
  const shotCoordinate2 = [4, 5];
  gameBoard.attackReceived(shotCoordinate1);
  expect(gameBoard.shipArray[0].hits).toBe(1);

  gameBoard.attackReceived(shotCoordinate2);
  expect(gameBoard.shipArray[0].hits).toBe(2);
});

test("shot missed", () => {
  const shipCoordinates = [
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
  const gameBoard = new Gameboard();
  gameBoard.callShips();
  gameBoard.placeShips(shipCoordinates);
  const shotCoordinate1 = [6, 7];
  const shotCoordinate2 = [5, 8];
  gameBoard.attackReceived(shotCoordinate1);
  expect(gameBoard.shipArray[0].hits).toBe(0);

  gameBoard.attackReceived(shotCoordinate2);
  expect(gameBoard.shipArray[0].hits).toBe(0);
});

test("all ships sunk", () => {
  const shipCoordinates = [
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
  const gameBoard = new Gameboard();
  gameBoard.callShips();
  gameBoard.placeShips(shipCoordinates);

  expect(gameBoard.allShipsSunk()).toBe(false);

  for (let i = 0; i < gameBoard.shipArray.length; i += 1) {
    for (let j = 0; j < gameBoard.shipArray[i].shipLength; j += 1) {
      gameBoard.shipArray[i].hits += 1;
    }
    gameBoard.shipArray[i].hasSunk();
  }
  expect(gameBoard.allShipsSunk()).toBe(true);
});
