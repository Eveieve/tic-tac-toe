const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

function Gameboard() {
  const boardArr = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  const getBoard = () => boardArr;

  const dropMark = (position) => {
    boardArr[position] = gameControl.activePlayer.mark; // assign activePlayer's mark
  };

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

playRound();
playRound();
//DOM

function showGameboard() {
  console.log("show current board");
  const boardDOM = document.querySelector(".grid");
  game.getBoard().forEach((mark, index) => {
    const markDOM = document.createElement("div");
    markDOM.textContent = `${mark}`;
    boardDOM.appendChild(markDOM);
    console.log(mark, index);
  });
}
