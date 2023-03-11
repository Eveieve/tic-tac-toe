// factory to return object
const Player = (name, mark) => {
  return { name, mark };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne.mark);
console.log(playerOne.name);

const playerTwo = Player("Steve", "O");
console.log(playerTwo.mark);
console.log(playerTwo.name);

const gameboardArr = ["", "", "", "", "", "", "", "", ""];

function playRound(player, mark) {
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
