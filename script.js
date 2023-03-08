//What's the point of naming it gameBoard?lol
const gameBoard = function () {
  grid: ['', '', '', '', '', '', '', '', ''];
};
console.log(gameBoard);
//constructor for each player object
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

// let playerOne = prompt("Who's player 1?");
// let playerTwo = prompt("Who's player 2?");

const playerOne = new Player('Jim', 'X');
console.log(playerOne);

const playerTwo = new Player('Steve', 'O');
console.log(playerTwo);
