let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let savedTime = 0;

const display = document.getElementById('display');
const msDisplay = document.getElementById('ms-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const playIcon = document.getElementById('play-icon');

const playSvg = '<path d="M8 5v14l11-7z"/>';
const pauseSvg = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

startBtn.addEventListener('click', toggleTimer);
stopBtn.addEventListener('click', () => { if(running) toggleTimer(); });
resetBtn.addEventListener('click', resetTimer);

function toggleTimer() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateTime, 10);
        running = true;
        playIcon.innerHTML = pauseSvg;
        startBtn.classList.add('paused');
    } else {
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
        playIcon.innerHTML = playSvg;
        startBtn.classList.remove('paused');
    }
}

function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    running = false;
    display.firstChild.nodeValue = "00:00:00";
    msDisplay.innerText = ".00";
    playIcon.innerHTML = playSvg;
    startBtn.classList.remove('paused');
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    const s = (seconds < 10) ? "0" + seconds : seconds;
    const ms = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.firstChild.nodeValue = `${h}:${m}:${s}`;
    msDisplay.innerText = `.${ms}`;
}