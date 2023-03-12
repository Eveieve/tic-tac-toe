const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
const playerTwo = Player("Two", "X");

function Gameboard() {
  const boardArr = ["O", "X", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;

  const dropMark = (mark, index) => {
    let availableCell;
    for (let i = 0; i < boardArr.length; i++) {
      if (boardArr[i] === "") {
        boardArr[i] = mark;
      } else if (availableCell !== "" && availableCell === 0) {
        console.log("No more cells");
        //end game
      }
    }
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
  let activePlayer = playerOne.name;

  const switchTurn = () =>
    (activePlayer =
      activePlayer === playerOne.name ? playerOne.name : playerTwo.name);

  const printTurn = () =>
    activePlayer === playerOne.name
      ? console.log(`${activePlayer}'s turn!`)
      : console.log(`${playerTwo.name}'s turn!`); //isn't right
  return { switchTurn, printTurn };
}

const gameControl = GameController();

function playRound() {
  updateGameboard();
  gameControl.switchTurn();
  gameControl.printTurn();
  game.dropMark(playerOne.mark);
}

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
