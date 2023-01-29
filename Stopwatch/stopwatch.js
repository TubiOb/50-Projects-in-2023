window.addEventListener('load', () => {
    var tens = document.getElementById("tens")
    var secs = document.getElementById("seconds")
    const start = document.getElementById("start-button")
    const restart = document.getElementById("reset-button")
    var Tens = 00;
    var Seconds = 00;
    var interval;


    function timerCount() {
        Tens++;

        if (Tens > 9) {
            tens.innerHTML = Tens;
        }
        if (Tens <= 9) {
            tens.innerHTML = "0" + Tens;
        }
        if (Tens > 99) {
            console.log(Seconds)
            Seconds++;
            console.log(Seconds)
            Tens = 0;
            tens.innerHTML = "0" + 0;
            secs.innerHTML = "0" + Seconds;
        }
        if (Seconds > 9) {
            secs.innerHTML = Seconds;
        }
    }

    let timeRun = false;

    start.addEventListener('click', () => {
        timeRun = !timeRun
        if (timeRun) {
            start.innerText = "Stop"
            console.log(timeRun)
            clearInterval(interval);
            interval = setInterval(timerCount, 10);
        } else {
            start.innerText = "Start"
            console.log(timeRun)
            clearInterval(interval);

        }
    })

    restart.addEventListener('click', () => {
        clearInterval(interval);
        Tens = "00";
        Seconds = "00";
        tens.innerHTML = Tens;
        secs.innerHTML = Seconds;
    })
})