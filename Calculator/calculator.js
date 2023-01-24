const keys = document.querySelector(".cals");
const operators = keys.querySelectorAll(".calculator__key-operator");
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
    } else { // If it's a button, log the text

        if (nodeName === 'BUTTON') {
            // console.log(textContent);
            // var res1 = textContent;

            const addd = res.value += textContent;

            arr.push(addd)

            var tras = Number(addd)

            // rest.value = addition(tras)


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
        console.log(calculatorOn)
    } else {
        powerbutton.innerText = "AC";
        resetCalculator();

        console.log(calculatorOn)
    }
}

// function resetCalculator1() {
//     res.placeholder = "";
// }

function resetCalculator() {
    rest.placeholder = "";
    res.placeholder = "";
}

// operators.addEventListener('click', operateClick, false);

// function operateClick(op) {
//     const { nodeName, textContent } = op.target;

//     if (textContent === "=") {
//         console.log("YES")
//     }
// }


addition = (num) => {
    return num;
}

deletion = (num) => {
    return num;
}