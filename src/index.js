import { setUpBoards, winLose, showShips, boardHitMiss } from "./interface";
import Gameboard from "./gameboard";
import Player from "./player";

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
    // playerShot
    const { target } = e;
    const shotCoordinatesString = target.id;
    const shotCoordinatesNumeric = shotCoordinatesString
      .split(" ")
      .map((x) => parseInt(x, 10));

    playerOne.makeShot(shotCoordinatesNumeric);
    const playerHit = gameboardTwo.attackReceived(shotCoordinatesNumeric);
    if (playerHit === true) {
      boardHitMiss(shotCoordinatesString, true, false);
      if (gameboardTwo.allShipsSunk()) {
        winLose(true);
      }
    } else {
      boardHitMiss(shotCoordinatesString, false, false);
    }
    console.log(playerOne.shotArray);

    // computer's turn
    const computerShotNumeric = playerTwo.makeShot();
    const computerShotString = computerShotNumeric
      .map((x) => x.toString())
      .join(" ");

    console.log(computerShotString);
    console.log(computerShotNumeric);

    const computerHit = gameboardOne.attackReceived(computerShotNumeric);
    if (computerHit === true) {
      boardHitMiss(computerShotString, true, true);
      if (gameboardOne.allShipsSunk()) {
        winLose(false);
      }
    } else {
      boardHitMiss(computerShotString, false, true);
    }

    // make sure player cant shoot at already shot coordinates or computer will still be able to shoot even though player didnt hit a new coordinate.
  });

  //
})();
