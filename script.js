// factory to return object
const Player = (name, marker) => {
  return { name, marker };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne);

const playerTwo = Player("Steve", "O");
console.log(playerTwo);

gameboardArr = ["O", "O", "O", "X", "O", "X", "O", "X", "O"];

//Set up function to render contents of gameboard array to the page
function displayGameboard() {
  const boardDOM = document.querySelector(".grid");
  gameboardArr.forEach(function (mark) {
    const markDOM = document.createElement("div");
    markDOM.textContent = `${mark}`;
    boardDOM.appendChild(markDOM);
  });
}
displayGameboard();

function updateGameboard() {
  grid.firstChild.remove();
  gameBoard.forEach(displayGameboard);
}
// console.log(grid);
