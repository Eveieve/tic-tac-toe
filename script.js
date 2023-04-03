const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("Player 1", "X");
const playerTwo = Player("Player 2", "O");

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
  const printedTurn = document.querySelector(".print-turn");
  let activePlayer = playerOne;
  const switchTurn = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  };
  const getActivePlayer = () => activePlayer;
  const printTurn = () => {
    printedTurn.textContent = `It's ${activePlayer.name}'s turn!`;
    inform.replaceWith(printedTurn);
  };
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const highlightTurn = () => {
    if (getActivePlayer() === playerOne) {
      one.style.cssText =
        "background-color: var(--light-yellow); color: #3C2A21; border-radius: 1rem;transform: scale(1.3)";
      two.style.cssText = "background-color: var(--light-yellow); ";
    } else {
      two.style.cssText =
        "background-color: var(--light-yellow); color: #3C2A21; border-radius: 1rem;transform: scale(1.3)";
      one.style.cssText = "background-color: var(--light-yellow); ";
    }
  };
  return {
    printTurn,
    switchTurn,
    highlightTurn,
    getActivePlayer,
  };
}

const modal = document.querySelector(".modal");

function evaluate() {
  const turn = document.querySelector(".turn");

  const showWinner = () => {
    console.log(`${gameControl.getActivePlayer().name} Win!`);
    turn.textContent = `Congrats ${gameControl.getActivePlayer().name}!`;
    //show modal to end game
    modal.showModal();
    const modalWinner = document.createElement("h3");
    modalWinner.textContent = `Woohoooo! ${
      gameControl.getActivePlayer().name
    } won this round!`;
    modal.style.cssText =
      "border: 2px solid #1A120B; background-color: var(--light-yellow); border-radius: 1rem; color: white";
    modal.insertBefore(modalWinner, again);
    //don't run printTurn when game is over!
  };

  const checkOccupied = (item) => item !== "";

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
  else if (game.boardArr.every(checkOccupied)) {
    const modalTie = document.createElement("h3");
    modalTie.textContent = "Tie!";
    modal.style.cssText =
      "border: 2px solid #1A120B; background-color: var(--light-yellow); border-radius: 1rem; color: white";
    modal.insertBefore(modalTie, again);
    modal.showModal();
  } // no row has the same marker
}

function playRound(cellIndex) {
  game.dropMark(cellIndex);
  updateGameboard();
  evaluate();
  gameControl.switchTurn();
  showGame.enableCell();
  gameControl.printTurn();
  gameControl.highlightTurn();
}

//DOM
function showGameboard() {
  console.log("show current board");
  const grid = document.querySelector(".grid");

  game.getBoard().forEach((mark) => {
    const cell = document.createElement("div");

    cell.classList.add("cell");
    cell.textContent = `${mark}`;
    grid.appendChild(cell);
    cell.style.cssText =
      "display: flex; align-items: center; justify-content: center; border-radius: .rem; font-size: 7rem;";
  });

  const enableCell = () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, cellIndex) => {
      cell.addEventListener("click", () => {
        if (cell.textContent === "") playRound(cellIndex);
      });
      cell.addEventListener("mouseover", () => {
        if (cell.textContent === "") {
          cell.className = "cell-empty";
        } else cell.className = "cell";
      });
    });
  };
  return { enableCell };
}

function FirstTurn() {
  gameControl.printTurn();
  gameControl.highlightTurn();
}
const inform = document.querySelector(".inform");
const startBtn = document.querySelector(".start");
const pageTwo = document.querySelector(".page-two-hidden");
startBtn.addEventListener(
  "click",
  () => {
    pageTwo.className = "page-two-shown";
    FirstTurn();
    showGame.enableCell();
    inform.style.display = "none";
  },
  { once: true }
);

const again = document.querySelector(".again");

function restartGame() {
  location.reload();
}
again.addEventListener("click", restartGame);
