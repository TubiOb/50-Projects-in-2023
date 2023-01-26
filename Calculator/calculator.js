const keys = document.querySelector(".cals");
const operators = document.querySelector(".calculator__key-operator");
const res = document.getElementById("text");
const rest = document.getElementById("results");
const powerbutton = document.querySelector("#power-button");
const calculator = document.querySelector("#calculator")

var firstnum = 0;
var secondnum = 0;
var result = 0;

var arr = [];

keys.addEventListener('click', handleClick, false);
powerbutton.addEventListener('click', togglePower);

function handleClick(e) {

    const { nodeName, textContent } = e.target;

    if (textContent === "⊲") {
        const addd = res.value;
        console.log(addd)

        var now = document.getElementById("text").value = addd.slice(0, -1);

        arr.push(addd)
        console.log(arr)

        var tras = Number(now)

        console.log("operator")
        console.log(tras)

    } else if (textContent === "C") {
        res.placeholder = 0;
        rest.placeholder = 0;

    } else if (textContent === "AC" || textContent === "OFF") {

    } else if (textContent === "=") {
        console.log("YES")
    } else {
        if (nodeName === 'BUTTON') {
            // console.log(textContent);
            // var res1 = textContent;

            const addd = res.value += textContent;

            arr.push(addd)

            var tras = Number(addd)
        }

    }
}

let calculatorOn = false;

function togglePower() {
    calculatorOn = !calculatorOn;
    if (calculatorOn) {
        powerbutton.innerText = "OFF";
        res.placeholder = 0;
        rest.placeholder = 0;
        var childNodes = document.getElementById("calculator").getElementsByTagName("*");
        for (var node of childNodes) {
            node.disabled = false
                // res.value = "";

        }
        console.log(calculatorOn)
    } else {
        powerbutton.innerText = "AC";
        var childNodes = document.getElementById("calculator").getElementsByTagName("*");
        for (var node of childNodes) {
            node.disabled = true
            powerbutton.disabled = false
            res.value = "";
        }
        resetCalculator();
        console.log(calculatorOn)
    }
}


window.addEventListener('load', () => {
    var childNodes = document.getElementById("calculator").getElementsByTagName("*");
    for (var node of childNodes) {
        node.disabled = true
        powerbutton.disabled = false
        resetCalculator();
    }
})


// function calc() {
//     // check last operator
// let lastOperator = res.innerHTML.slice(-1);
// const { nodeName, textContent } = pO.target;
//     res.value = addd.slice(-1);
//     console.log(addd)
//     if (res.includes('+', '−', '×', '÷', '%', '.')) {
//         // output.innerHTML = res.innerHTML.slice(0, -1) + pO.innerHTML;
//         console.log(res)
//     } else {
//         res.innerHTML += pO.innerHTML;
//     }
// }

function resetCalculator() {
    rest.placeholder = "";
    res.placeholder = "";
}