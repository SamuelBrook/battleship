import { setUpBoards, showHit, showShips } from "./interface";
import Gameboard from "./gameboard";
import Player from "./player";

// eslint-disable-next-line no-unused-vars
const gameLoop = (() => {
  // display boards
  setUpBoards();

  // create players' boards and the players themselves
  const gameboardOne = new Gameboard();
  const gameboardTwo = new Gameboard();
  const playerOne = new Player();
  const playerTwo = new Player();

  // create ships
  gameboardOne.callShips();
  gameboardTwo.callShips();

  // create random ship coordinates for ships to be displayed
  gameboardOne.createRandomShipCoordinates();
  gameboardTwo.createRandomShipCoordinates();

  // place these ship in the gameboards
  gameboardOne.placeShips();
  gameboardTwo.placeShips();

  // show the ships visibly on the player's gameboard
  showShips(gameboardOne, gameboardTwo);

  const computerBoard = document.querySelector("#enemy-board");
  computerBoard.addEventListener("click", (e) => {
    const { target } = e;
    const shotCoordinatesString = target.id;
    const shotCoordinatesNumeric = shotCoordinatesString
      .split(" ")
      .map((x) => parseInt(x, 10));
    console.log(shotCoordinatesNumeric);
    console.log(gameboardTwo.placedShipLocations);

    playerOne.makeShot(shotCoordinatesNumeric);
    const hit = gameboardTwo.attackReceived(shotCoordinatesNumeric);
    console.log(hit);
    if (hit === true) {
      showHit(shotCoordinatesString);
      // call function which makes ship hit on board
      // check if ship sunk, if not continue, if yes ship coordinates turn into ship sunk aesthetic
      // check if all ships sunk, if not continue, if
    } else {
      // call function which makes miss on board
    }

    // delay of 5 seconds

    // computer's turn
  });

  //
})();
