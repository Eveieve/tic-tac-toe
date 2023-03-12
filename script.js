function Gameboard() {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;

  const dropMark = () => {
    let availableCell;

    for (let i = 0; i < boardArr.length; i++) {
      if (boardArr[i] === "") {
        availableCell = boardArr[i];
        availableCell = playerOne.mark;
      } else if (availableCell !== "" && availableCell === 0) {
        return; //end game
      }
    }
  };

  return { boardArr, getBoard, dropMark };
}

console.log(Gameboard.dropMark()); //not a function

const Player = (name, mark) => {
  return { name, mark };
};

const playerOne = Player("One", "O");
// console.log(playerOne.mark);
const playerTwo = Player("Two", "X");

//render the updated status of gameboard
function updateGameboard() {
  const grid = document.querySelector(".grid");
  console.log(grid);

  console.log(grid.childNodes);

  for (let i = 1; i < grid.childNodes.length; i++) {
    console.log("remove previous gameboard");
    grid.childNodes[i].remove();
  }
}

function playRound() {
  GameController.switchTurn;
  dropMark();
  updateGameboard();
}
//DOM
function showGameboard() {
  const boardDOM = document.querySelector(".grid");
  boardArr.forEach((mark, index) => {
    const markDOM = document.createElement("div");
    markDOM.textContent = `${mark}`;
    boardDOM.appendChild(markDOM);
    console.log(mark, index);
  });
}
function GameController() {
  let activePlayer = playerOne.name;

  const switchTurn = () =>
    (activePlayer =
      activePlayer === playerOne.name ? playerOne.name : playerTwo.name);

  const printTurn = () =>
    activePlayer === playerOne.name
      ? console.log(`${playerOne.name}'s turn!`)
      : console.log(`${playerTwo.name}'s turn!`);
  return { switchTurn, printTurn };
}
