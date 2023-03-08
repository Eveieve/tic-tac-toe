// factory to return object
const Player = (name, marker) => {
  return { name, marker };
};
// Object for each player
const playerOne = Player("Jim", "X");
console.log(playerOne);

const playerTwo = Player("Steve", "O");
console.log(playerTwo);

const gameBoard = (function () {
  grid: ["", "", "", "", "", "", "", "", ""];
  console.log(playerOne.marker);
})();
