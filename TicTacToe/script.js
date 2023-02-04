window.addEventListener('load', () => {
    $("#home").show();
    $("#game").hide();
})

const play = document.querySelector("#start-game");
const Tile = document.querySelectorAll(".tile");
// const player1score = document.querySelector(".playerOneScore").textContent;
// const player2score = document.querySelector(".playerTwoScore").textContent;
const reset = document.querySelector("#reset");
const playerTurn = document.querySelector(".playerTurn");

var player = "X";
var values = [];
var firstPlayerscore = 0;
var secondPlayerscore = 0;
var isPlayerOneTurn = true;
var roundWon = false;
var playCount = 0;
var played = "";
var text = "";

var possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]


];


play.addEventListener('click', () => {
    $("#home").hide();
    $("#game").show();
})


// Tile.forEach((tile) => {
//     tile.innerHTML = "";
//     tile.addEventListener('click', (e) => {
//         console.log("I am CLICKED")
//         if (roundWon)
//             return;

//         if (e.target.innerHTML = "") {

//             playCount++;
//             played = isPlayerOneTurn ? "X" : "O";
//             values[Number(e.target.value)] = played;
//             // console.log(tile)
//             e.target.innerHTML = played;
//             isPlayerOneTurn = !isPlayerOneTurn;
//             if (playCount > 4) {
//                 if (!resultValidation() && playCount == 9)
//                     updateBoard();
//             }
//         }
//     });

// });



for (var i = 0; i < Tile.length; i++) {

    Tile[i].innerHTML = "";
    Tile[i].addEventListener("click", (e) => {

        if (roundWon) {
            return;
        }


        if (e.target.innerHTML == "") {
            playCount++;
            played = isPlayerOneTurn ? "X" : "O";
            values[Number(e.target.value)] = played;
            e.target.innerHTML = played;
            isPlayerOneTurn = !isPlayerOneTurn;

            if (playCount > 4) {
                if (!resultValidation() && playCount == 9)
                    updateBoard();
            }

        }

    });

}



function updateBoard() {
    playCount = 0;
    values = [];
    roundWon = false;

    Tile.forEach((tile) => {
        tile.innerHTML = "";
        tile.style.backgroundColor = "#84a98c";
    });
}





// const isValid = (Tile) => {
//     if (Tile.innerText === "X" || Tile.innerText === "O") {
//         return false;
//     }
//     return true;
// }

// Tile.forEach((tile, index) => {
//     tile.addEventListener('click', () =>
//         userAction(tile, index)
//     );
// });



function resultValidation() {
    for (var i = 0; i < possibleWins.length; i++) {
        const winCondition = possibleWins[i];
        const a = winCondition[0];
        const b = winCondition[1];
        const c = winCondition[2];

        if (values[a] === played && values[b] === played && values[c] === played) {
            roundWon = true;
            Tile[a].style.backgroundColor = "lightgreen";
            Tile[b].style.backgroundColor = "lightgreen";
            Tile[c].style.backgroundColor = "lightgreen";

            setTimeout(function() {
                updateBoard();
            }, 1500);
            return true;
        }

    }
    return false;
}


reset.addEventListener('click', () => {
    values = [];
    isGameActive = true;

    if (played === "O") {
        playerTurn.innerText = "X"
            // changePlayer();
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

// const changePlayer = () => {
//     player = player === 'X' ? 'O' : 'X';
//     playerTurn.innerText = player;
// }