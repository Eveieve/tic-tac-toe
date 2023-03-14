const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

const gameControl = GameController();
function Gameboard() {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;

  const dropMark = (cellIndex) => {
    console.log(gameControl.activePlayer.mark);
    // let i = boardArr.indexOf(`${cell.dataset.index}`);
    // console.log(i);
    // console.log(boardArr[cellIndex].dataset.index);
    boardArr.splice(cellIndex, 1, gameControl.activePlayer.mark);
    console.log(boardArr);
    // boardArr[cellIndex] = gameControl.activePlayer.mark; // assign activePlayer's mark
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

function playRound() {
  updateGameboard();
  gameControl.printTurn();
  game.dropMark();
  gameControl.switchTurn();
}

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
    // return { cell };
  });
  const cells = document.querySelectorAll(".cell");
  console.log(cells);

  return { cells };
}

const showGame = showGameboard();
console.log(showGame.cells);
showGame.cells.forEach((cell, cellIndex) => {
  cell.addEventListener("click", () => playRound(cellIndex));
  cell.dataset.index = `${cellIndex}`;
  console.log(cell.dataset.index);
});
// console.log(cellIndex);
