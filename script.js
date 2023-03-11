// factory to return object
const Player = (name, marker) => {
  return { name, marker };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne);

const playerTwo = Player("Steve", "O");
console.log(playerTwo);

const gameboardArr = ["O", "O", "O", "X", "O", "X", "O", "X", "O"];

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
displayGameboard();

// function to check whether cell is empty
const checkMark = () => {
  for (let i = 0; i < gameboardArr.length; i++) {
    if (gameboardArr[i] === undefined) {
      const availableCell = gameboardArr[i];
    }
  }
  if (availableCell === 0) return; //endgame if there's no available cell
};
// function to add Mark
const addMark = (index, playerMark) => {
  gameboardArr[index] = playerMark;
};

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
