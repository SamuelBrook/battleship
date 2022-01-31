const setUpBoards = () => {
  const boards = document.querySelectorAll(".board");
  boards.forEach((board) => {
    for (let i = 0; i < 100; i += 1) {
      const coordinate = document.createElement("div");
      const idName = i + 1;
      coordinate.id = idName;
      coordinate.classList.add("coordinate");
      board.appendChild(coordinate);
    }
  });
};

const gameFlow = () => {
  console.log("hello");
};

export { setUpBoards, gameFlow };
