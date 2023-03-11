const gameboardArr = ["", "", "", "", "", "", "", "", ""];

function Mark(player, mark) {
  let cell = "";
  const addMark = (mark) => (cell = mark);
  const getMark = () => mark;
  return { addMark, getMark };
}
//function to render contents of gameboard array to the page
function displayGameboard() {
  const boardDOM = document.querySelector(".grid");
  gameboardArr.forEach((mark, index) => {
    const markDOM = document.createElement("div");
    markDOM.textContent = `${mark}`;
    boardDOM.appendChild(markDOM);
    console.log(mark, index);
  });
}

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

// factory to return object
const Player = (name, mark) => {
  return { name, mark };
};
// Object for each player

function playRound() {
  let gameCount = 1;
  addMark();
  updateGameboard();
  gameCount++;
}
const playerOne = Player("One", "O");

const playerTwo = Player("Two", "X");

function GameController() {
  const switchTurn = () => {
    if (gameCount % 2 !== 0) {
      console.log(`${PlayerOne.name}'s turn!`);
    } else console.log(`${PlayerTwo.name}'s turn!`);

    return { switchTurn };
  };
}
