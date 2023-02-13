let Words = document.querySelector("#wordCount");
let Chars = document.querySelector("#charCount");
let Accuracy = document.querySelector("#accuracyCount");
const Text = document.querySelector("#UserInput");
let Timer = document.querySelector("#timer");
let Circledown = document.querySelector("#countdownCircle");
const wordToType = document.querySelector("#word-to-type");


// TYPING TEST
let errorCount = 0;
let totalerrors = 0;
let wordsCount = 0;
let index = 0;
let charCount = 0;
let accuracyCount = 0;

let c = 0;
let typed = 0;

let userInput = "";
let startTime, endTime, totalTime = 60,
    timePass = 0;
let words = 0,
    chars = 0,
    accuracy = 0;
let originalText = wordToType.textContent;

let interval;

// Text.addEventListener('input', function() {
//     userInput = Text.value;
//     Words = countWords(userInput);
//     Chars = countChars(userInput);

//     if (!startTime) {
//         startTime = new Date();
//         interval = setInterval(updateTimer, 1000);
//     }
// });

function changeContent() {
    wordToType.textContent = null;
    current_content = "The quick brown fox jumps over the lazy dog and runs through the forest. Artificial intelligence is rapidly changing the way we live and work, creating new opportunities and challenges for society. The future of transportation is electric, self - driving, and connected, providing greater convenience, efficiency, and safety.";
    current_content.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        wordToType.appendChild(charSpan);
    })
}


function textInput() {
    input = Text.value;
    input_array = input.split('');
    typed++;
    errorCount = 0;
    quoteSpanArray = wordToType.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
        let typed = input_array[index]
        if (typed == null) {
            char.classList.remove('correct');
        } else if (typed === char.innerText) {
            char.classList.add('correct');
        } else {
            errorCount++;
        }
    });

    let correctChars = (typed - (totalerrors + errorCount));
    Chars.textContent = Math.round(typed);
    let accuracy = ((correctChars / typed) * 100);
    Accuracy.textContent = Math.round(accuracy);

    if (input.length == wordToType.length) {
        changeContent();
        totalerrors += errorCount;
        Text.value = "";
    }
}



function updateTimer() {
    if (totalTime > 0) {
        totalTime--;
        timePass++;
        Timer.textContent = totalTime;
    } else {
        Circledown.style.borderColor = "red";
        finishGame();
    }
    // if (totalTime === 0) {
    //     endTime = new Date();
    //     clearInterval(interval);
    //     Text.setAttribute("readonly", "readonly");
    //     calculateWordsPerMin();
    //     calculateCharsPerMin();
    //     calculateAccuracy();
    //     updateResults();
    // }
}


function finishGame() {
    clearInterval(interval);
    Text.disabled = true;
    // wordToType.style.display = "none";
    wpm = Math.round((((typed / 5) / timePass) * 60));
    Words.textContent = wpm;
}

function startGame() {
    resetGame();
    changeContent();
    clearInterval(interval);
    interval = setInterval(updateTimer, 1000);
}


function resetGame() {
    totalTime = 60;
    timePass = 0;
    errorCount = 0;
    totalerrors = 0;
    accuracy = 0;
    typed = 0;
    c = 0;
    Text.disabled = false;
    Text.value = "";
    // wordToType.textContent = "";
    accuracy.textContent = 100;
    Timer.textContent = totalTime;
}

// function countWords(str) {
//     let words = str.split(" ");
//     return words.length;
// }

// function countChars(str) {
//     return str.length;
// }

// function calculateWordsPerMin() {
//     let timeDiff = (endTime - startTime) / 1000;
//     words = Math.round(words / (timeDiff / 60));
// }

// function calculateCharsPerMin() {
//     // let timeDiff = (endTime - startTime) / 1000;
//     // chars = Math.round(chars / (timeDiff / 60));
// }

// function calculateAccuracy() {
//     let totalChars = originalText.length;
//     let correctChars = userInput.length;
//     let missedChars = totalChars - correctChars;
//     accuracy = ((correctChars - missedChars) / totalChars) * 100;
//     accuracy = Math.round(accuracy);
// }

// function updateResults() {
//     Words.textContent = words;
//     Chars.textContent = chars;
//     Accuracy.textContent = accuracy + "%";
// }

// let word = ["The quick brown fox jumps over the lazy dog and runs through the forest. Artificial intelligence is rapidly changing the way we live and work, creating new opportunities and challenges for society. The future of transportation is electric, self-driving, and connected, providing greater convenience, efficiency, and safety."];

// Text.addEventListener('keydown', function startTimer() {
//     interval = setInterval(function() {
//         timer -= 1;
//         Timer.textContent = timer;

//         const percentage = (timer / 60) * 100;
//         Circledown.style.clip = `rect(0px, 200px, 200px, ${200 - (percentage / 100) * 200}px)`;

//         if (timer <= 60) {
//             Circledown.style.borderColor = "red";
//         }

//         if (timer === 0) {
//             clearInterval(interval);
//             Text.removeEventListener('keydown', startTimer);
//         }
//     }, 1000);

//     Text.removeEventListener('keydown', startTimer);
// });


// Text.value = word[index];
// wordsContainer.innerHTML = word[index][0];

// Text.addEventListener('input', function() {
//     const input = Text.value;
//     const inputArray = input.split(" ");
//     const currentWord = inputArray[inputArray.length - 1];
//     const currentWordLength = currentWord.length;
//     const targetWord = word[index].substr(0, currentWordLength);

//     if (currentWord === targetWord) {
//         wordsContainer.style.backgroundColor = "green";
//         wordsContainer.innerHTML = word[index].substr(0, currentWordLength);
//     } else {
//         wordsContainer.style.backgroundColor = "red";
//         wordsContainer.innerHTML = targetWord;
//     }

//     if (currentWord.length === word[index].length) {
//         index++;
//         Text.value = "";
//         wordsContainer.innerHTML = word[index][0];
//     }

//     charCount = input.length;
//     Chars.textContent = charCount;

//     const error = errorCount / charCount * 100;
//     accuracyCount = 100 - error;
//     Accuracy.textContent = accuracyCount.toFixed(2);
// });