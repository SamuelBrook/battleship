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
    if (
      playerOne.playerShot(shotCoordinatesNumeric, playerOne.shotArrayPlayer)
    ) {
      return;
    }
    playerOne.makeShot(shotCoordinatesNumeric);
    const playerHit = gameboardTwo.attackReceived(shotCoordinatesNumeric);
    if (playerHit === true) {
      gameboardTwo.hits += 1;
      console.log(gameboardTwo.hits);
      // console.log(gameboardTwo.allShipsSunk());
      if (gameboardTwo.allShipsSunk() || gameboardTwo.hits === 19) {
        winLose(true);
      }
      boardHitMiss(shotCoordinatesString, true, false);
    } else {
      boardHitMiss(shotCoordinatesString, false, false);
    }

    // computer's turn

    const computerShotNumeric = playerTwo.makeShot();
    const computerShotString = computerShotNumeric
      .map((x) => x.toString())
      .join(" ");
    const computerHit = gameboardOne.attackReceived(computerShotNumeric);
    if (computerHit === true) {
      gameboardOne.hits += 1;
      // console.log(gameboardOne.allShipsSunk());
      if (gameboardOne.allShipsSunk() || gameboardOne.hits === 20) {
        winLose(false);
      }
      boardHitMiss(computerShotString, true, true);
    } else {
      boardHitMiss(computerShotString, false, true);
    }
  });

  //
})();
