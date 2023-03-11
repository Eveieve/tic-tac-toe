const gameboard = (() => {
  const boardArr = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => boardArr;

  const addMark = () => {
    let emptyCell = "";
    console.log(boardArr);
    for (let i = 0; i < boardArr.length; i++) {
      if (boardArr[i] === undefined) {
        emptyCell = boardArr[i];
      }

      if (boardArr[i].length === 0) return; //end game
    }
    console.log(playerOne.mark);
    emptyCell = playerOne.mark;
  };

  return { boardArr, getBoard, addMark };
})();
console.log(gameboard.addMark());
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
  let gameCount = 1;
  GameController.switchTurn;
  addMark();
  updateGameboard();
  gameCount++;
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
  const switchTurn = () => {
    if (gameCount % 2 !== 0) {
      console.log(`${playerOne.name}'s turn!`);
      mark = playerOne.mark;
    } else {
      console.log(`${playerTwo.name}'s turn!`);
      mark = playerTwo.mark;
    }
    return { switchTurn };
  };
}
