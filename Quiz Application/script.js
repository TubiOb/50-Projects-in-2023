const Home = document.querySelector("#home");
const start = document.querySelector("#start-button");
const highScore = document.querySelector("#score-button");
const ScorePage = document.querySelector("#score");
var highScoresTable = document.getElementById("high-scores");
const UserInfo = document.querySelector("#userID");
const User = document.getElementById("username");
const Enter = document.querySelector("#enter");
const QuizPage = document.querySelector("#quiz");
var timer = document.getElementById("timer");
const Question = document.getElementById("question-text");
const QuestionAnswers = document.querySelectorAll(".answer");
const optionA = document.getElementById("answer1-text");
const optionB = document.getElementById("answer2-text");
const optionC = document.getElementById("answer3-text");
const optionD = document.getElementById("answer4-text");
const Submit = document.getElementById("submit");
const optionsContainer = document.getElementById("opt");


window.addEventListener('load', () => {
    $("#score").hide();
    $("#home").show();
    $("#userID").hide();
    $("#quiz").hide();
})


var quizQuestions1 = [{
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlink Text Markup Language",
        c: "Hyper Text Manipulation Language",
        d: "HyperText Transmission Port",
        correct: "a"
    },
    {
        question: "What is the most widely used programming language for web development?",
        a: "JavaScript",
        b: "Python",
        c: "PHP",
        d: "SQL",
        correct: "a"
    },
    {
        question: "What is the correct syntax for an if statement in JavaScript?",
        a: "if i == 5 then",
        b: "if (i == 5)",
        c: "if i = 5",
        d: "if (i == 5) then",
        correct: "b"
    },
    {
        question: "Which of these is a high-level programming language?",
        a: "Java",
        b: "C++",
        c: "Assembly",
        d: "Python",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Sheet Styles",
        d: "Computer Sheet Styles",
        correct: "a"
    }
];

var quizQuestions2 = [{
        question: "Who holds the record for the most home runs in a single MLB season?",
        a: "Barry Bonds",
        b: "Mark McGwire",
        c: "Sammy Sosa",
        d: " Babe Ruth",
        correct: "a"
    },
    {
        question: "Which country has won the most FIFA World Cup tournaments?",
        a: "Brazil",
        b: "Germany",
        c: "Italy",
        d: "Argentina",
        correct: "a"
    },
    {
        question: "Who is considered the greatest basketball player of all time?",
        a: "Michael Jordan",
        b: "Lebron James",
        c: "Kareem Abdul-Jabbar",
        d: "Magic Johnson",
        correct: "a"
    },
    {
        question: "What is the name of the annual tennis tournament played on grass courts in England?",
        a: "French Open",
        b: "Wimbledon",
        c: "US Open",
        d: "Australian Open",
        correct: "b"
    },
    {
        question: "Who holds the record for the most career goals in the NHL?",
        a: "Wayne Gretzky",
        b: "Mario Lemieux",
        c: "Bobby Orr",
        d: "Steve Yzerman",
        correct: "a"
    }
];

var quizQuestions3 = [{
        question: "What is the capital of France?",

        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correct: "b"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correct: "d"

    },
    {
        question: "What is the name of the first man on the moon?",
        a: "Neil Armstrong",
        b: "Buzz Aldrin",
        c: "Michael Collins",
        d: "John Young",
        correct: "a"

    },
    {
        question: "What is the tallest mammal in the world?",
        a: "Giraffe",
        b: "Elephant",
        c: "Hippopotamus",
        d: "Rhinoceros",
        correct: "a"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Maldives",
        b: "Monaco",
        c: "San Marino",
        d: "Vatican City",
        correct: "d"
    }
];


let currentQuiz = 0;
let userscore = 0;
let scoreOne = 0;
let level = 1;

var questionsCount = 0;
var quiz = 0;
var quizData = [quizQuestions1, quizQuestions2, quizQuestions3];


start.addEventListener('click', () => {
    console.log("YESSSS")
    $("#score").hide();
    $("#home").hide();
    $("#userID").show();
    $("#quiz").hide();
})



Enter.addEventListener('click', () => {
    var name = User.value;
    console.log(name)

    if (name === "") {
        preventDefault();
        return
    } else {
        $("#score").hide();
        $("#home").hide();
        $("#userID").hide();
        $("#quiz").show();

        timer.addEventListener('load', () => {
            let mytime = setTimeout(Load, 3000);
            clearInterval(mytime)
        })
    }
})


Load();

var timeLeft = 60;
var countdown = setInterval(function() {
    timeLeft--;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    timer.innerHTML = `0${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timer.innerHTML = "Time's up!";
    }
}, 1000);

QuizPage.addEventListener('load', () => {
    Load();

})

function Load() {
    questionsCount += 1;
    unselectedAnswer();

    const quizIndex = quizData[quiz][currentQuiz];

    Question.innerText = quizIndex.question;
    optionA.innerText = quizIndex.a;
    optionB.innerText = quizIndex.b;
    optionC.innerText = quizIndex.c;
    optionD.innerText = quizIndex.d;
}


function selectedAnswer() {
    let Answer = undefined;

    QuestionAnswers.forEach(QuestionAnswer => {
        if (QuestionAnswer.checked) {
            Answer = QuestionAnswer.id;
        }
    });
    return Answer;
}


function unselectedAnswer() {
    QuestionAnswers.forEach(Answer => {
        Answer.checked = false;
    });
}


Submit.addEventListener('click', () => {
    const Answer = selectedAnswer();

    if (Answer) {
        if (Answer === quizQuestions1[currentQuiz].correct) {
            userscore++;
            console.log(userscore)
        }

        currentQuiz++;

        if (currentQuiz < quizQuestions1.length) {
            Load();

        } else {
            Question.innerText = `Hurray, you have completed Level ${level}. \nYou scored ${userscore}/${questionsCount}`
            level++;
        }
    }
})


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