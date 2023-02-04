window.addEventListener('load', () => {
    $("#home").show();
    $("#game").hide();
})

const play = document.querySelector("#start-game");
const Tile = document.querySelectorAll(".tile");
const player1score = document.querySelector(".playerOneScore").textContent;
const player2score = document.querySelector(".playerTwoScore").textContent;
const reset = document.querySelector("#reset");
const playerTurn = document.querySelector(".playerTurn").innerText;

var player = "X";
var tiles = [];
var firstPlayerscore = 0;
var secondPlayerscore = 0;
var isPlayerOneTurn = true;
var roundWon = false;
var playCount = 0;
var played = "";

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


play.addEventListener('click', () => {
    $("#home").hide();
    $("#game").show();
})


Tile.forEach((tile) => {
    tile.innerHTML = "";
    tile.addEventListener('click', (e) => {
        if (roundWon)
            return;

        if (e.target.innerHTML = "") {
            playCount++;
            played = isPlayerOneTurn ? "X" : "O";
            tiles[Number(e.target.value)] = played;
            e.target.innerHTML = played;
            isPlayerOneTurn = !isPlayerOneTurn;
            if (playCount > 4) {
                if (!resultValidation() && playCount == 9)
                    updateBoard();
            }
        }
    })

});

function updateBoard() {
    playCount = 0;
    tiles = [];
    roundWon = false;

    Tile.forEach((tile) => {
        tile.innerHTML = "";
        tile.style.backgroundColor = "";
    });
}





// const isValid = (Tile) => {
//     if (Tile.innerText === "X" || Tile.innerText === "O") {
//         return false;
//     }
//     return true;
// }

// const updateBoard = (index) => {
//     tiles[index] = player;
// }



// // for (var i = 0; i < 9; i++) {
// //     var btn = i;
// //     tiles[i] = btn;
// //     console.log(tiles[i])
// // }

// Tile.forEach((tile, index) => {
//     tile.addEventListener('click', () =>
//         userAction(tile, index)
//     );
// });


// Tile.forEach(tile => {
//     tile.addEventListener('click', function(event) {
//         if (this.classList.contains('clicked')) {
//             return;
//         }

//         this.classList.add('clicked');
//         // Perform your logic for updating player scores, etc. here
//     });
// });


// // function Turn() {
// //     if (isPlayer1Turn) {
// //         playerTurn.innerText = "1";
// //     } else {
// //         playerTurn.innerText = "2"
// //     }
// // }



function resultValidation() {
    for (var i = 0; i < possibleWins.length; i++) {
        const winCondition = possibleWins[i];
        const a = tiles[winCondition[0]];
        const b = tiles[winCondition[1]];
        const c = tiles[winCondition[2]];

        if (a === played && b === played && c === played) {
            roundWon = true;
            Tile[a].style.backgroundColor = "";
            Tile[b].style.backgroundColor = "";
            Tile[c].style.backgroundColor = "";

            setTimeout(function() {
                updateBoard();
            }, 2000);
            return true;
        }

    }
    return false;
}


reset.addEventListener('click', () => {
    tiles = [];
    isGameActive = true;

    if (player === "O") {
        playerTurn.innerText = "X"
        changePlayer();
    }

    Tile.forEach(tile => {
        tile.innerText = "";
    })
})

// const userAction = (tile, index) => {
//     if (isValid(tile) && isGameActive) {
//         tile.innerText = player;
//         tile.classList.add(`${player}`)
//         updateBoard(index);
//         resultValidation();
//         changePlayer();
//     }
// };

const changePlayer = () => {
    player = player === 'X' ? 'O' : 'X';
    playerTurn.innerText = player;
}