const home = document.querySelector("#home");
const start = document.querySelector("#start-button");
const highScore = document.querySelector("#score-button");
const scorePage = document.querySelector("#score");
var highScoresTable = document.getElementById("high-scores");
const userInfo = document.querySelector("#userID");
const user = document.getElementById("username");
const enter = document.querySelector("#enter");
const quizPage = document.querySelector("#quiz");
var timer = document.getElementById("timer");
const question = document.getElementById("question-text");
const questionAns = document.querySelectorAll(".answer");
const optionA = document.getElementById("answer1-text");
const optionB = document.getElementById("answer2-text");
const optionC = document.getElementById("answer3-text");
const optionD = document.getElementById("answer4-text");
const submit = document.getElementById("submit");
const optionsContainer = document.getElementById("opt");


window.addEventListener('load', () => {
    $("#score").hide();
    $("#home").show();
    $("#userID").hide();
    $("#quiz").hide();
})


var quizLevel = [{
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlink Text Markup Language",
        c: "Hyper Text Manipulation Language",
        d: "HyperText Transmission Port",
        correct: "a",
    },
    {
        question: "What is the most widely used programming language for web development?",
        a: "JavaScript",
        b: "Python",
        c: "PHP",
        d: "SQL",
        correct: "a",
    },
    {
        question: "What is the correct syntax for an if statement in JavaScript?",
        a: "if i == 5 then",
        b: "if (i == 5)",
        c: "if i = 5",
        d: "if (i == 5) then",
        correct: "b",
    },
    {
        question: "Which of these is a high-level programming language?",
        a: "Java",
        b: "C++",
        c: "Assembly",
        d: "Python",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Sheet Styles",
        d: "Computer Sheet Styles",
        correct: "a",
    },
];

var quizLevelTwo = [{
        question: "Who holds the record for the most home runs in a single MLB season?",
        a: "Barry Bonds",
        b: "Mark McGwire",
        c: "Sammy Sosa",
        d: " Babe Ruth",
        correct: "a",
    },
    {
        question: "Which country has won the most FIFA World Cup tournaments?",
        a: "Brazil",
        b: "Germany",
        c: "Italy",
        d: "Argentina",
        correct: "a",
    },
    {
        question: "Who is considered the greatest basketball player of all time?",
        a: "Michael Jordan",
        b: "Lebron James",
        c: "Kareem Abdul-Jabbar",
        d: "Magic Johnson",
        correct: "a",
    },
    {
        question: "What is the name of the annual tennis tournament played on grass courts in England?",
        a: "French Open",
        b: "Wimbledon",
        c: "US Open",
        d: "Australian Open",
        correct: "b",
    },
    {
        question: "Who holds the record for the most career goals in the NHL?",
        a: "Wayne Gretzky",
        b: "Mario Lemieux",
        c: "Bobby Orr",
        d: "Steve Yzerman",
        correct: "a",
    },
];

var quizLevelThree = [{
        question: "What is the capital of France?",

        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b",
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "d",

    },
    {
        question: "What is the name of the first man on the moon?",
        a: "Neil Armstrong",
        b: "Buzz Aldrin",
        c: "Michael Collins",
        d: "John Young",
        correct: "a",

    },
    {
        question: "What is the tallest mammal in the world?",
        a: "Giraffe",
        b: "Elephant",
        c: "Hippopotamus",
        d: "Rhinoceros",
        correct: "a",
    },
    {
        question: "What is the smallest country in the world?",
        a: "Maldives",
        b: "Monaco",
        c: "San Marino",
        d: "Vatican City",
        correct: "d",
    },
];


let currentQuiz = 0;
let userscore = 0;
let scoreOne = 0;
let level = 1;

var questionsCount = 0;
var quiz = 0;
var quizData = [quizLevel, quizLevelTwo, quizLevelThree];


quizLoad();

function quizLoad(startTimer) {
    questionsCount += 1;
    unselectedAnswer();

    const quizIndex = quizData[quiz][currentQuiz];

    question.innerText = quizIndex.question;
    optionA.innerText = quizIndex.a;
    optionB.innerText = quizIndex.b;
    optionC.innerText = quizIndex.c;
    optionD.innerText = quizIndex.d;
}


function selectedAnswer() {
    let answer = undefined;

    questionAns.forEach((questionAns) => {
        if (questionAns.checked) {
            answer = questionAns.id;
            console.log("answer is: " + answer)
        }
    });
    return answer;
}

function unselectedAnswer() {
    questionAns.forEach((answer) => {
        answer.checked = false;
    });
}


submit.addEventListener('click', () => {
    const answer = selectedAnswer();
    console.log(answer);


    // if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizLevel.length) {
        quizLoad();

    } else {
        if (userscore >= 3) {
            question.innerText = `Hurray, you have completed Level ${level}. \nYou scored ${userscore}/${questionsCount}`
            level++;
            quiz += 1;
            currentQuiz = 0;
            if (quiz < quizData.length)
                quizLoad();
            else
                question.innerText = `Hurray, you have completed The King's Quiz. \nYou scored ${userscore}/${questionsCount}`
        } else {
            question.innerText = "You Lost. \nPlay Again?"
        }
    }
    // }

})


start.addEventListener('click', () => {
    console.log("YESSSS")
    $("#score").hide();
    $("#home").hide();
    $("#userID").show();
    $("#quiz").hide();
})



enter.addEventListener('click', (f) => {
    var name = user.value;
    console.log(name)

    if (name === "") {
        f.preventDefault();
        return
    } else {
        $("#score").hide();
        $("#home").hide();
        $("#userID").hide();
        $("#quiz").show();
    }
})


// timer.addEventListener('load', function() {
//     let mytime = setTimeout(Load, 1000);
//     clearInterval(mytime)
// })


const startTimer = () => {
    var timeLeft = 60;
    var countdown = setInterval(function() {
        timeLeft--;
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;
        timer.innerHTML = `0${minutes}:${ seconds < 10 ? "0" + seconds : seconds }`;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            currentQuiz++;
            // setTimeout(Load, 1000);
        }
    }, 1000);
}


document.getElementById("return").addEventListener("click", function() {
    $("#score").hide();
    $("#home").show();
    $("#userID").hide();
    $("#quiz").hide();
});

document.getElementById("BACK").addEventListener("click", function() {
    $("#score").hide();
    $("#home").show();
    $("#userID").hide();
    $("#quiz").hide();
});


highScore.addEventListener('click', () => {
    console.log("HIGHSCORE")
    $("#score").show();
    $("#home").hide();
    $("#userID").hide();
    $("#quiz").hide();





    // LOCAL STORAGE
    var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

    var name = User.value;
    console.log(name)

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    var highScoresTable = document.getElementById("high-scores");


    for (var i = 0; i < highScores.length; i++) {
        var Score = highScores[i];
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + (i + 1) + "</td><td>" + Score.name + "</td><td>" + Score.score + "</td>";
        highScoresTable.appendChild(row);
    }
})