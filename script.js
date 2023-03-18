const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("Player One", "X");
const playerTwo = Player("Player Two", "O");

const gameControl = GameController();
const game = Gameboard();
const showGame = showGameboard();
// const user = getUser();
const startBtn = document.querySelector(".start");
// startBtn.addEventListener("click", getUser);

// function getUser() {
//   let getPlayerOne = prompt("Who's Player One (marker O)?");
//   let getPlayerTwo = prompt("Who's Player Two (marker X)?");

//   const playerOne = Player(getPlayerOne, "0");
//   const playerTwo = Player(getPlayerTwo, "X");

//   return { playerOne, playerTwo };
// }

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

const again = document.querySelector(".again");
console.log(again);

function restartGame() {
  location.reload();
}

again.addEventListener("click", restartGame);

function evaluate() {
  const turn = document.querySelector(".turn");
  const showWinner = () => {
    console.log(`${gameControl.getActivePlayer().name} Win!`);
    turn.textContent = `${gameControl.getActivePlayer().name} Win!`;
    //end game

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

function playRound(cellIndex) {
  game.dropMark(cellIndex);
  gameControl.switchTurn();
  gameControl.printTurn();

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
