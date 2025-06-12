let hours = 0;
let minutes = 0;
let seconds = 0;

const hoursEle = document.createElement('p');
hoursEle.setAttribute('id', 'hours');
hoursEle.textContent = hours < 10 ? `0${hours}` : hours;

const minutesEle = document.createElement('p');
minutesEle.setAttribute('id', 'minutes');
minutesEle.textContent = minutes < 10 ? `0${minutes}` : minutes;

const secondsEle = document.createElement('p');
secondsEle.setAttribute('id', 'seconds');
secondsEle.textContent = seconds < 10 ? `0${seconds}` : seconds;

const startButton = document.createElement('button');
startButton.setAttribute('id', 'start');
startButton.textContent = 'Start'
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.textContent = 'Reset'
resetButton.style.display = 'none';
let interval = 0;

document.body.append(startButton, resetButton)

let timer = document.querySelector('.timer')
timer.style.display = 'flex';
timer.alignItems = 'center'
timer.append(hoursEle,':',minutesEle, ':', secondsEle);

startButton.addEventListener('click', function() {
    if(startButton.textContent === 'Start') {
        startButton.textContent = 'Pause';
        resetButton.style.display = 'block';
        interval = setInterval(updateTime, 10)
    } else if(startButton.textContent === 'Pause') {
        startButton.textContent = 'Start';
        clearInterval(interval);
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(interval);
    hours = minutes = seconds = 0;
    updateClock(hours, minutes, seconds);
    resetButton.style.display = 'none';
    startButton.textContent = 'Start';
})


function updateClock(hours, minutes, seconds) {
    secondsEle.textContent = seconds < 10 ? `0${seconds}` : seconds;
    minutesEle.textContent = minutes < 10 ? `0${minutes}` : minutes;
    hoursEle.textContent = hours < 10 ? `0${hours}` : hours;
}

const updateTime = () => {
    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
    }

    if(minutes > 59) {
        hours+=1;
        minutes = 0;
        seconds = 0;
    }
    seconds = seconds + 1;
    updateClock(hours, minutes,seconds);
}