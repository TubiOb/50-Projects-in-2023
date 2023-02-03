window.addEventListener('load', () => {
    $("#home").show();
    $("#game").hide();
})

const play = document.querySelector("#start-game");
const playerTurn = document.querySelector("#display-player-turn");
const Tile = document.querySelectorAll(".tile");
const player1score = document.querySelector(".playerOneScore");
const player2score = document.querySelector(".playerTwoScore");
const reset = document.querySelector("#reset");

var player = "X";
var tiles = [Tile];
var firstPlayerscore = 0;
var secondPlayerscore = 0;
var PlayerX = "X";
var PlayerO = "O";
var isPlayerTurn;

console.log(tiles)
console.log(playerTurn)

play.addEventListener('click', () => {
    $("#home").hide();
    $("#game").show();
})

reset.addEventListener('click', () => {

})

if (isPlayerTurn) {
    playerTurn.inner
}

for (var i = 0; i < 9; i++) {
    var btn = "";
    tiles[i] = btn;
    console.log(tiles[i])
}