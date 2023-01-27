const calculator = document.querySelector("#calculator");
const keys = document.querySelector(".cals");
const operators = ["+", "-", "*", "÷", "%"]
const res = document.getElementById("text");
const rest = document.getElementById("results");
const powerbutton = document.querySelector("#power-button");
var decimalAdded = false;



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

        res.value = 0;
        rest.value = 0;
        console.log("EGBAMI OOOOOOO")

    } else if (textContent === "AC" || textContent === "OFF") {

    } else if (textContent === "=") {
        console.log("YES")
            // console.log(operators)
        var equation = res.value;
        var lastChar = equation[equation.length - 1];

        if (operators.indexOf(lastChar) > -1 || lastChar == '.')
            equation = equation.replace(/.$/, '');
        if (equation)
            rest.value = eval(equation);

        decimalAdded = false;
    } else if (operators.indexOf(textContent) > -1) {
        var lastChar = res.value[res.value.length - 1]
        if (res.value != '' && operators.indexOf(lastChar) == -1)
            res.value += textContent;

        else if (res.value == '' && textContent == '-')
            res.value += textContent;

        if (operators.indexOf(lastChar) > -1 && res.value.length > 1) {
            res.value = res.value.replace(/.$/, textContent);
        }

        decimalAdded = false;

    } else {
        if (nodeName === 'BUTTON') {
            if (res.value == 0 && nodeName === 'BUTTON') {
                const addd = res.value = textContent;
                console.log("JESUS CHRIST")
            }
            // console.log(textContent);
            // var res1 = textContent;
            else {
                const addd = res.value += textContent;

                arr.push(addd)

                var tras = Number(addd)
            }
        }

        e.preventDefault();

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
            rest.value = "";
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


function resetCalculator() {
    rest.placeholder = "";
    res.placeholder = "";
}
res.placeholder = "";