const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

function Gameboard() {
  const boardArr = ["O", "X", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;

  const dropMark = (mark, index) => {
    boardArr[index] = mark; //someone's mark
  };

  return { getBoard, dropMark };
}
const game = Gameboard();

function updateGameboard() {
  const grid = document.querySelector(".grid");

  for (let i = 1; i < grid.childNodes.length; i++) {
    console.log("remove previous gameboard");
    grid.childNodes[i].remove();
  }
  showGameboard();
}

function GameController() {
  let activePlayer = playerOne;

  const switchTurn = () =>
    (activePlayer = activePlayer === playerOne ? playerTwo : playerOne);
  console.log(activePlayer);
  const printTurn = () =>
    activePlayer === playerOne.name
      ? console.log(`${activePlayer.name}'s turn!`)
      : console.log(`${activePlayer.name}'s turn!`); //isn't right
  return { switchTurn, printTurn, activePlayer };
}

const gameControl = GameController();
console.log(gameControl.activePlayer);

function playRound() {
  gameControl.printTurn();
  updateGameboard();
  game.dropMark(playerOne.mark);
  gameControl.switchTurn();
}

playRound();
playRound();
//DOM
function showGameboard() {
  const boardDOM = document.querySelector(".grid");
  game.getBoard().forEach((mark, index) => {
    const markDOM = document.createElement("div");
    markDOM.textContent = `${mark}`;
    boardDOM.appendChild(markDOM);
    console.log(mark, index);
  });
}
