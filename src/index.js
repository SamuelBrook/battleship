import { setUpBoards, playerShotLocation, showShips } from "./interface";
import Gameboard from "./gameboard";
import Player from "./player";

// eslint-disable-next-line no-unused-vars
const gameLoop = (() => {
  setUpBoards();

  const gameboardOne = new Gameboard();
  const gameboardTwo = new Gameboard();
  const playerOne = new Player();
  const playerTwo = new Player();

  gameboardOne.callShips();
  gameboardTwo.callShips();

  gameboardOne.createRandomShipCoordinates();
  gameboardTwo.createRandomShipCoordinates();

  gameboardOne.placeShips();
  gameboardTwo.placeShips();

  showShips(gameboardOne, gameboardTwo); // remember only show playerBoard, enemy board clouded and only shows hits
  const playerTurn = true;

  playerShotLocation();
})();
