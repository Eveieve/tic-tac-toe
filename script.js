// factory to return object
const Player = (name, marker) => {
  return { name, marker };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne);

const playerTwo = Player("Steve", "O");
console.log(playerTwo);

gameboard = ["O", "O", "O", "X", "O", "X", "O", "X", "O"];

const displayGameboard = () => gameboard;

let cellMark = 0;

//Things cell has to do
function cell() {
  const addMark = (playerMark) => {
    cellMark = playerMark;
  };
  //check if cell is empty
  const getMark = (cellMark) => cellMark;

  return { addMark, getMark };
}
//Set up function to render contents of gameboard array to the page
// function displayGameboard() {
//   const boardDOM = document.querySelector(".grid");
//   gameboardArr.forEach(function (mark, index) {
//     const markDOM = document.createElement("div");
//     markDOM.textContent = `${mark}`;
//     boardDOM.appendChild(markDOM);
//     console.log(mark, index);
//   });
// }
// displayGameboard();
//attach an event listener to each cell
//to turn it to the player's marker

// function updateGameboard() {
//   grid.childNodes.remove();
//   gameBoard.forEach(displayGameboard);
// }
