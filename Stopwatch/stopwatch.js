const tens = document.getElementById("tens")
const secs = document.getElementById("seconds")
const start = document.getElementById("start-button")
const restart = document.getElementById("restart-button")

window.addEventListener('load', () => {
    var Tens = 00;
    var Seconds = 00;
    var interval;


    function timerCount() {
        tens++;

        if (tens > 9) {
            tens.innerHTML = tens;
        } else if (tens <= 9) {
            tens.innerHTML = "0" + tens;
        } else if (tens > 99) {
            console.log(secs)
            secs++;
            console.log(secs)
            tens = 0;
            tens.innerHTML = "0" + 0;
            secs.innerHTML = "0" + secs;
        } else if (secs > 9) {
            secs.innerHTML = secs;
        }
    }

    let timeRun = false;
    start.addEventListener('click', () => {
        timeRun = !timeRun
        if (timeRun) {
            start.innerText = "Stop"
            console.log("OYAAAAAA")
            console.log(timeRun)
        } else {
            start.innerText = "Start"
            console.log("I Don Start")
            console.log(timeRun)
        }
    })
})