const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("Player One", "X");
const playerTwo = Player("Player Two", "O");

const gameControl = GameController();
const game = Gameboard();
const showGame = showGameboard();
const startBtn = document.querySelector(".start");

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
  const turn = document.querySelector(".turn");
  let activePlayer = playerOne;
  const printFirstTurn = () =>
    (turn.textContent = `${activePlayer.name}'s turn!`);
  const switchTurn = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  };
  const getActivePlayer = () => activePlayer;
  const printTurn = () => {
    turn.textContent = `${activePlayer.name}'s turn!`;
  };
  return { printFirstTurn, switchTurn, printTurn, getActivePlayer };
}

const modal = document.querySelector(".modal");

const again = document.querySelector(".again");

function restartGame() {
  location.reload();
}
again.addEventListener("click", restartGame);

function evaluate() {
  const turn = document.querySelector(".turn");
  const showWinner = () => {
    console.log(`${gameControl.getActivePlayer().name} Win!`);
    turn.textContent = `${gameControl.getActivePlayer().name} Win!`;
    //show modal to end game
    modal.showModal();
    const modalWinner = document.createElement("h3");
    modalWinner.textContent = `Woohoo! ${
      gameControl.getActivePlayer().name
    } won this round!`;
    modal.insertBefore(modalWinner, again);
  };

  const isOccupied = (item) => item !== "";

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
  else if (game.boardArr.every(isOccupied)) {
    const modalTie = document.createElement("h3");
    modalTie.textContent = "Tie!";
    modal.insertBefore(modalTie, again);
    modal.showModal();
  } // no row has the same marker
}
// gameControl.printFirstTurn();

function playRound(cellIndex) {
  game.dropMark(cellIndex);
  evaluate();
  gameControl.switchTurn();
  gameControl.printTurn();
  updateGameboard();
}

//DOM
function showGameboard() {
  console.log("show current board");
  const grid = document.querySelector(".grid");
  grid.style.cssText = "overflow: hidden";
  game.getBoard().forEach((mark) => {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.textContent = `${mark}`;
    grid.appendChild(cell);
    cell.style.cssText = "outline: 2px solid #000";
  });
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, cellIndex) => {
    cell.addEventListener("click", () => playRound(cellIndex));
    return { cellIndex };
  });
  return { cells };
}
