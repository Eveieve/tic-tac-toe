const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

const gameControl = GameController();

function Gameboard() {
  const boardArr = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  const getBoard = () => boardArr;
  const dropMark = (cellIndex) => {
    console.log("drop marker");
    console.log(gameControl.switchTurn().activePlayer.mark); //THIS CHANGED EVERYTHING?
    boardArr.splice(cellIndex, 1, gameControl.switchTurn().activePlayer.mark);
    console.log(boardArr);
  };

  return { getBoard, dropMark, boardArr };
}
const game = Gameboard();

function updateGameboard() {
  console.log("update gameboard");
  const grid = document.querySelector(".grid");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  showGameboard();
  console.log(Gameboard.boardArr);
}

function GameController() {
  let activePlayer = playerOne;

  const switchTurn = () => {
    console.log("switch turn!");
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    console.log(activePlayer);
    return { activePlayer };
  };

  const printTurn = () => {
    const turn = document.querySelector(".turn");
    turn.textContent = `${activePlayer.name}'s turn!`;
  };
  return { switchTurn, activePlayer, printTurn };
}

gameControl.switchTurn();

function playRound(cellIndex) {
  gameControl.printTurn();
  gameControl.switchTurn();
  game.dropMark(cellIndex);
  updateGameboard();
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
  });
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, cellIndex) => {
    cell.addEventListener("click", () => playRound(cellIndex));
    cell.dataset.index = `${cellIndex}`;
    return { cellIndex };
  });
  return { cells };
}

const showGame = showGameboard();

// showGame.cells.forEach((cell, cellIndex) => {
//   cell.addEventListener("click", () => playRound(cellIndex));
//   return { cellIndex };
// });

// const initialTurn = () => {
//   const turn = document.querySelector(".turn");
//   turn.textContent = `${gameControl.activePlayer.name}'s turn`;
// };

// initialTurn();
