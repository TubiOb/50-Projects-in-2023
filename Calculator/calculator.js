const keys = document.querySelector(".cals");
const operators = document.querySelectorAll(".calculator__key-operator");
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

    // If it's a button, log the text
    if (nodeName === 'BUTTON') {
        // console.log(textContent);
        // var res1 = textContent;

        const addd = res.value += textContent;

        arr.push(addd)

        var tras = Number(addd)

        rest.value = addition(tras)



        // console.log(res1)
        // arr.push(res1);
        // console.log(arr)

        // res.value = arr;
    }
}


addition = (num) => {
    return num + 1;
}