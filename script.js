const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

function Gameboard() {
  const boardArr = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  const getBoard = () => boardArr;

  const dropMark = (index, mark) => {
    mark = gameControl.activePlayer.mark;
    boardArr[index] = gameControl.activePlayer.mark; // assign activePlayer's mark
  };
  console.log(boardArr);
  return { getBoard, dropMark, boardArr };
}
const game = Gameboard();

function updateGameboard() {
  const grid = document.querySelector(".grid");
  console.log("remove previous gameboard");
  console.log(grid);
  console.log(grid.firstChild);
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  showGameboard();
}

function GameController() {
  let activePlayer = playerOne;

  const switchTurn = () => {
    console.log("switch turn!");
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    console.log(activePlayer);
  };
  const printTurn = () => {
    const turn = document.querySelector(".turn");
    console.log(activePlayer);
    activePlayer === playerOne.name
      ? (turn.textContent = `${activePlayer.name}'s turn!`)
      : (turn.textContent = `${activePlayer.name}'s turn!`);
  };
  return { switchTurn, printTurn, activePlayer };
}

const gameControl = GameController();

function playRound() {
  updateGameboard();
  gameControl.printTurn();
  game.dropMark();
  gameControl.switchTurn();
}

// playRound();
// playRound();
// playRound();
//DOM

function showGameboard() {
  console.log("show current board");
  const grid = document.querySelector(".grid");
  game.getBoard().forEach((mark, index) => {
    const cell = document.createElement("div");
    cell.style.cssText = "border: 2px solid brown";
    cell.classList.add("cell");
    cell.textContent = `${mark}`;
    grid.appendChild(cell);
    console.log(mark, index);
  });
  const cells = document.querySelectorAll(".cell");
  console.log(cells);
  return { cells };
}

Array.from(showGameboard().cells).forEach((cell) =>
  cell.addEventListener("click", playRound)
);
