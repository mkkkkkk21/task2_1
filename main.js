const time = document.getElementById("time");
const start = document.getElementById("startButton");
const stop = document.getElementById("stopButton");
const reset = document.getElementById("resetButton");

let hours = 0;
let minutes = 0;
let seconds = 0;
let mseconds =0;

let stopwatch =() => {
    mseconds++;
    if (mseconds % 10 === 0) {
        seconds++;
        mseconds =0;
    
    if (seconds % 60 === 0) {
        minutes ++;
        seconds = 0;
    
    if (minutes % 60 === 0) {
        hours ++;
        minutes = 0;
    }
}
}

    time.textContent = `${hours}:${minutes}:${seconds}:${mseconds}`;
}


function setbuttonsinitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
}

function setbuttonsrunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
}

function setbuttonsstopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
}

setbuttonsinitial()

let interval;

start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
        return;
    }
    setbuttonsrunning();
    interval = setInterval(stopwatch,100);
});



stop.addEventListener("click", () => {
    if (stop.classList.contains('inactive') === true) {
        return;
    }
    setbuttonsstopped();
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    if(reset.classList.contains('inactive') === true) {
        return;
    }
    setbuttonsinitial();
    time.textContent = '0:0:0:0';
    hours = 0;
    minutes = 0;
    seconds = 0;
    mseconds = 0;
});
