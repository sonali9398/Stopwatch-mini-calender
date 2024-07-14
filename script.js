var displayTime = document.getElementById('displayTime');
let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
        if(hours === 24){
            hours = 0;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;

}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);

}

function watchStop(){
    clearInterval(timer);
}

function watchRestart(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();
// console.log(today)
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

date.innerHTML = (today.getDate < 10 ? '0' : "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
