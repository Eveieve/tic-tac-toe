// What's the point of naming it gameBoard?lol
const gameBoard = function () {
  grid: ["", "", "", "", "", "", "", "", ""];
  console.log(gameBoard);
};

// constructor for each player object
// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
// }
// factory to return object
const Player = (name, marker) => {
  return { name, marker };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne);

const playerTwo = Player("Steve", "O");
console.log(playerTwo);
