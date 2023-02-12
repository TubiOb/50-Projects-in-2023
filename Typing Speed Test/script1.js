const Words = document.querySelector("#wordCount");
const Chars = document.querySelector("#charCount");
const Accuracy = document.querySelector("#accuracyCount");
const Text = document.querySelector("#UserInput");
const Timer = document.querySelector("#TimerCounter");
const Circledown = document.querySelector("#countdownCircle");
const wordToType = document.querySelector("#word-to-type");


// TYPING TEST
let errorCount = 0;
let wordsCount = 0;
let index = 0;
let charCount = 0;
let accuracyCount = 0;

let userInput = "";
let startTime, endTime, totalTime = 60;
let words = 0,
    chars = 0,
    accuracy = 0;
let originalText = wordToType.textContent;

let interval;

Text.addEventListener('input', function() {
    userInput = Text.value;
    Words = countWords(userInput);
    Chars = countChars(userInput);

    if (!startTime) {
        startTime = new Date();
        interval = setInterval(updateTimer, 1000);
    }
});

function updateTimer() {
    totalTime--;
    Timer.textContent = totalTime;

    if (totalTime <= 60) {
        Circledown.style.borderColor = "red";
    }
    if (totalTime === 0) {
        endTime = new Date();
        clearInterval(interval);
        Text.setAttribute("readonly", "readonly");
        calculateWordsPerMin();
        calculateCharsPerMin();
        calculateAccuracy();
        updateResults();
    }
}


function countWords(str) {
    let words = str.split(" ");
    return words.length;
}

function countChars(str) {
    return str.length;
}

function calculateWordsPerMin() {
    let timeDiff = (endTime - startTime) / 1000;
    words = Math.round(words / (timeDiff / 60));
}

function calculateCharsPerMin() {
    let timeDiff = (endTime - startTime) / 1000;
    chars = Math.round(chars / (timeDiff / 60));
}

function calculateAccuracy() {
    let totalChars = originalText.length;
    let correctChars = userInput.length;
    let missedChars = totalChars - correctChars;
    accuracy = ((correctChars - missedChars) / totalChars) * 100;
    accuracy = Math.round(accuracy);
}

function updateResults() {
    Words.textContent = words;
    Chars.textContent = chars;
    Accuracy.textContent = accuracy + "%";
}

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