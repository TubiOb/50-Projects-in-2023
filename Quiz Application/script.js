const Home = document.querySelector("#home");
const start = document.querySelector("#start-button");
const highScore = document.querySelector("#score-button");
const ScorePage = document.querySelector("#score");
var highScoresTable = document.getElementById("high-scores");
const UserInfo = document.querySelector("#userID");
const User = document.getElementById("#username");
const Enter = document.querySelector("#enter");
const QuizPage = document.querySelector("#quiz");
var timer = document.getElementById("timer");
const Question = document.getElementById("question-text");
const QuestionAnswer = document.querySelectorAll(".answer");
const optionA = document.getElementById("answer1-text");
const optionB = document.getElementById("answer2-text");
const optionC = document.getElementById("answer3-text");
const optionD = document.getElementById("answer4-text");
const Submit = document.getElementById("submit");


window.addEventListener('load', () => {
    $("#score").hide();
    $("#home").show();
    $("#userID").hide();
    $("#quiz").hide();

})

let currentQuiz = 0;
let userscore = 0;
let scoreOne = 0;
let level = 1;

var questionsCount = 0;
var quiz = 0;

var quizQuestions1 = [{
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyperlink Text Markup Language",
        c: "Hyper Text Manipulation Language",
        d: "HyperText Transmission Port",
        correctAnswer: "a"
    },
    {
        question: "What is the most widely used programming language for web development?",
        a: "JavaScript",
        b: "Python",
        c: "PHP",
        d: "SQL",
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for an if statement in JavaScript?",
        a: "if i == 5 then",
        b: "if (i == 5)",
        c: "if i = 5",
        d: "if (i == 5) then",
        correctAnswer: "b"
    },
    {
        question: "Which of these is a high-level programming language?",
        a: "Java",
        b: "C++",
        c: "Assembly",
        d: "Python",
        correctAnswer: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Sheet Styles",
        d: "Computer Sheet Styles",
        correctAnswer: "a"
    }
];

var quizQuestions2 = [{
        question: "Who holds the record for the most home runs in a single MLB season?",
        a: "Barry Bonds",
        b: "Mark McGwire",
        c: "Sammy Sosa",
        d: " Babe Ruth",
        correctAnswer: "a"
    },
    {
        question: "Which country has won the most FIFA World Cup tournaments?",
        a: "Brazil",
        b: "Germany",
        c: "Italy",
        d: "Argentina",
        correctAnswer: "a"
    },
    {
        question: "Who is considered the greatest basketball player of all time?",
        a: "Michael Jordan",
        b: "Lebron James",
        c: "Kareem Abdul-Jabbar",
        d: "Magic Johnson",
        correctAnswer: "a"
    },
    {
        question: "What is the name of the annual tennis tournament played on grass courts in England?",
        a: "French Open",
        b: "Wimbledon",
        c: "US Open",
        d: "Australian Open",
        correctAnswer: "b"
    },
    {
        question: "Who holds the record for the most career goals in the NHL?",
        a: "Wayne Gretzky",
        b: "Mario Lemieux",
        c: "Bobby Orr",
        d: "Steve Yzerman",
        correctAnswer: "a"
    }
];

var quizQuestions3 = [{
        question: "What is the capital of France?",

        a: "London",
        b: "Paris",
        c: "Berlin",
        d: "Rome",
        correctAnswer: "b"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Southern Ocean",
        d: "Pacific Ocean",
        correctAnswer: "d"

    },
    {
        question: "What is the name of the first man on the moon?",
        a: "Neil Armstrong",
        b: "Buzz Aldrin",
        c: "Michael Collins",
        d: "John Young",
        correctAnswer: "a"

    },
    {
        question: "What is the tallest mammal in the world?",
        a: "Giraffe",
        b: "Elephant",
        c: "Hippopotamus",
        d: "Rhinoceros",
        correctAnswer: "a"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Maldives",
        b: "Monaco",
        c: "San Marino",
        d: "Vatican City",
        correctAnswer: "d"
    }
];