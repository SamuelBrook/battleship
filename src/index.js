import { setUpBoards, gameFlow } from "./interface";
import Gameboard from "./gameboard";
import Player from "./player";

// eslint-disable-next-line no-unused-vars
const gameLoop = (() => {
  setUpBoards();

  const gameboardOne = new Gameboard();
  const gameboardTwo = new Gameboard();
  const playerOne = new Player();
  const playerTwo = new Player();
})();

gameFlow();
