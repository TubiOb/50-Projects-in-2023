const keys = document.querySelector(".cals");
const operators = keys.querySelectorAll(".calculator__key-operator");
const res = document.getElementById("text");
const rest = document.getElementById("results");

var firstnum = 0;
var secondnum = 0;
var result = 0;

var arr = [];

keys.addEventListener('click', handleClick, false);

function handleClick(e) {

    // Extract the nodeName and textContent from
    // the clicked element
    const { nodeName, textContent } = e.target;



    // console.log(res1)
    // arr.push(res1);
    // console.log(arr)

    // res.value = arr;
    // if (textContent === "+" || textContent === "−" || textContent === "%" ||
    //     textContent === "×" || textContent === "÷" || textContent === "=" ||
    //     textContent === "C" || textContent === "AC" || textContent === "⊲")

    // if (textContent === "C" || textContent === "AC" || textContent === "⊲") {


    //     console.log("operator")
    // }
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
    } else if (textContent === "AC") {

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