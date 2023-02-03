window.addEventListener('load', () => {
    $("#home").show();
    $("#game").hide();
})

const play = document.querySelector("#start-game");
const Tile = document.querySelectorAll(".tile");
const player1score = document.querySelector(".playerOneScore").innerText;
const player2score = document.querySelector(".playerTwoScore").innerText;
const reset = document.querySelector("#reset");
const playerTurn = document.querySelector(".playerTurn").innerText;

var player = "X";
var tiles = ["", "", "", "", "", "", "", "", ""];
var firstPlayerscore = 0;
var secondPlayerscore = 0;
var PlayerX = "X";
var PlayerO = "O";
const tie = "TIE";
var isGameActive = true;
var possibleWins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 4, 6],
    [6, 7, 8],
    [2, 7, 8]
];


// firstPlayerscore = player1score;
// secondPlayerscore = player2score;
console.log(firstPlayerscore);
console.log(player1score)

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

const isValid = (Tile) => {
    if (Tile.innerText === "X" || Tile.innerText === "O") {
        return false;
    }
    return true;
}

const updateBoard = (index) => {
    tiles[index] = player;
}



// for (var i = 0; i < 9; i++) {
//     var btn = i;
//     tiles[i] = btn;
//     console.log(tiles[i])
// }

Tile.forEach((tile, index) => {
    tile.addEventListener('click', () =>
        userAction(tile, index)
    );
})


// function Turn() {
//     if (isPlayer1Turn) {
//         playerTurn.innerText = "1";
//     } else {
//         playerTurn.innerText = "2"
//     }
// }



function resultValidation() {
    let roundwon = false;
    for (var i = 0; i < 8; i++) {
        const winCondition = possibleWins[i];
        const a = tiles[winCondition[0]];
        const b = tiles[winCondition[1]];
        const c = tiles[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundwon = true;
            break;
        }
    }

    if (roundwon) {
        if (player === "X") {
            isGameActive = false
            firstPlayerscore++;
            console.log(firstPlayerscore);
            player1score.innerText = firstPlayerscore;
            console.log(player1score)
        } else {
            secondPlayerscore++;
            player2score.innerText = secondPlayerscore;
            isGameActive = true;
        }
    }
    if (!tiles.includes("")) {
        player1score.innerText = "TIE";
        player2score.innerText = "TIE";
    }
}


reset.addEventListener('click', () => {
    tiles = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;

    if (player === "O") {
        playerTurn.innerText = "X"
        changePlayer();
    }

    Tile.forEach(tile => {
        tile.innerText = "";
    })
})

const userAction = (tile, index) => {
    if (isValid(tile) && isGameActive) {
        tile.innerText = player;
        tile.classList.add(`player${player}`)
        updateBoard(index);
        resultValidation();
        changePlayer();
    }
}

const changePlayer = () => {
    // playerDisplay.classList.remove(`player${pl}`);
    player = player === 'X' ? 'O' : 'X';
    playerTurn.innerText = player;
    // playerDisplay.classList.add(`player${currentPlayer}`);
}