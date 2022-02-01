const setUpBoards = () => {
  const boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    for (let i = 1; i <= 100; i += 1) {
      const coordinate = document.createElement("div");
      let idName = `${i} 1`;
      if (i > 10 && i <= 20) {
        idName = `${i - 10} 2`;
      } else if (i > 20 && i <= 30) {
        idName = `${i - 20} 3`;
      } else if (i > 30 && i <= 40) {
        idName = `${i - 30} 4`;
      } else if (i > 40 && i <= 50) {
        idName = `${i - 40} 5`;
      } else if (i > 50 && i <= 60) {
        idName = `${i - 50} 6`;
      } else if (i > 60 && i <= 70) {
        idName = `${i - 60} 7`;
      } else if (i > 70 && i <= 80) {
        idName = `${i - 70} 8`;
      } else if (i > 80 && i <= 90) {
        idName = `${i - 80} 9`;
      } else if (i > 90 && i <= 100) {
        idName = `${i - 90} 10`;
      }
      coordinate.id = idName;
      coordinate.classList.add("coordinate");
      board.appendChild(coordinate);
    }
  });
};

const playerShotLocation = () => {
  const board2 = document.querySelector("#enemy-board");
  const squares = board2.childNodes;
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      const { target } = e;
      const squareID = target.id;
      console.log(squareID);
      return squareID;
    });
  });
};

const showShips = (gameboard1, gameboard2) => {
  const board1 = document.querySelector("#player-board");
  const board2 = document.querySelector("#enemy-board");
  function populateGrid(gameboard, domBoard) {
    const squares = domBoard.childNodes;
    squares.forEach((square) => {
      for (let i = 0; i < gameboard.placedShipLocations.length; i += 1) {
        for (let j = 0; j < gameboard.placedShipLocations[i].length; j += 1) {
          const stringVersion = gameboard.placedShipLocations[i][j].join(" ");
          if (square.id === stringVersion) {
            square.classList.add("ship");
          }
        }
      }
    });
  }
  populateGrid(gameboard1, board1);
  populateGrid(gameboard2, board2);
};

export { setUpBoards, playerShotLocation, showShips };
