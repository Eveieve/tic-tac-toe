const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("Player One", "O");
const playerTwo = Player("Player Two", "X");

const gameControl = GameController();
const game = Gameboard();
const showGame = showGameboard();

function Gameboard() {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;
  const dropMark = (cellIndex) => {
    console.log("drop marker");
    if (boardArr[cellIndex] === "") {
      boardArr.splice(cellIndex, 1, gameControl.getActivePlayer().mark);
      console.log(boardArr);
    }
  };

  return { getBoard, dropMark, boardArr };
}

function updateGameboard() {
  console.log("update gameboard");
  const grid = document.querySelector(".grid");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  showGameboard();
  const getGrid = () => grid;
  return { getGrid };
}
const update = updateGameboard();

function GameController() {
  let activePlayer = playerOne;

  const switchTurn = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  };
  const getActivePlayer = () => activePlayer;
  const printTurn = () => {
    const turn = document.querySelector(".turn");
    turn.textContent = `${activePlayer.name}'s turn!`;
  };
  return { switchTurn, printTurn, getActivePlayer };
}

const modal = document.querySelector(".modal");
console.log(modal);

function evaluate() {
  const turn = document.querySelector(".turn");
  const showWinner = () => {
    console.log(`${gameControl.getActivePlayer().name} Win!`);
    turn.textContent = `${gameControl.getActivePlayer().name} Win!`;
    //end game
    modal.showModal();
  };
  if (
    game.boardArr[0] !== "" &&
    game.boardArr[0] === game.boardArr[1] &&
    game.boardArr[0] === game.boardArr[2]
  )
    showWinner();
  else if (
    game.boardArr[3] !== "" &&
    game.boardArr[3] === game.boardArr[4] &&
    game.boardArr[3] === game.boardArr[5]
  )
    showWinner();
  else if (
    game.boardArr[6] !== "" &&
    game.boardArr[6] === game.boardArr[7] &&
    game.boardArr[6] === game.boardArr[8]
  )
    showWinner();
  else if (
    game.boardArr[0] !== "" &&
    game.boardArr[0] === game.boardArr[3] &&
    game.boardArr[0] === game.boardArr[6]
  )
    showWinner();
  else if (
    game.boardArr[1] !== "" &&
    game.boardArr[1] === game.boardArr[4] &&
    game.boardArr[1] === game.boardArr[7]
  )
    showWinner();
  else if (
    game.boardArr[2] !== "" &&
    game.boardArr[2] === game.boardArr[5] &&
    game.boardArr[2] === game.boardArr[8]
  )
    showWinner();
  else if (
    game.boardArr[0] !== "" &&
    game.boardArr[0] === game.boardArr[4] &&
    game.boardArr[0] === game.boardArr[8]
  )
    showWinner();
  else if (
    game.boardArr[2] !== "" &&
    game.boardArr[2] === game.boardArr[4] &&
    game.boardArr[2] === game.boardArr[6]
  )
    showWinner();
  else return;
}

gameControl.switchTurn();

function playRound(cellIndex) {
  gameControl.printTurn();
  gameControl.switchTurn();
  game.dropMark(cellIndex);
  updateGameboard();
  evaluate();
}

//DOM
function showGameboard() {
  console.log("show current board");
  const grid = document.querySelector(".grid");
  game.getBoard().forEach((mark) => {
    const cell = document.createElement("div");
    cell.style.cssText = "border: 2px solid brown";
    cell.classList.add("cell");
    cell.textContent = `${mark}`;
    grid.appendChild(cell);
  });
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, cellIndex) => {
    cell.addEventListener("click", () => playRound(cellIndex));
    return { cellIndex };
  });
  return { cells };
}
