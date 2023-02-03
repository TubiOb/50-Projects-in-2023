window.addEventListener('load', () => {
    $("#home").show();
    $("#game").hide();
})

const play = document.querySelector("#start-game");
const Tile = document.querySelectorAll(".tile");
const player1score = document.querySelector(".playerOneScore");
const player2score = document.querySelector(".playerTwoScore");
const reset = document.querySelector("#reset");
const playerTurn = document.querySelector(".playerTurn").innerText;

var player = "X";
var tiles = ["", "", "", "", "", "", "", "", ""];
var firstPlayerscore = 0;
var secondPlayerscore = 0;
var PlayerX = "X";
var PlayerO = "O";
var isPlayer1Turn;


// var getX = playerTurn.innerHTML;
// console.log(getX, "span dami")
// console.log(tiles)
console.log(playerTurn)

play.addEventListener('click', () => {
    $("#home").hide();
    $("#game").show();
})

reset.addEventListener('click', () => {

})



for (var i = 0; i < 9; i++) {
    var btn = "";
    tiles[i] = btn;
    console.log(tiles[i])
}


function Turn() {
    if (isPlayer1Turn) {
        playerTurn.innerText = "1";
    } else {
        playerTurn.innerText = 2
    }
}