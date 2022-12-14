var setTimeBtnEl = document.querySelector("#timer-set-time");
var modalEl = document.querySelector("#timer-modalContainer");
var modalCancelBtn = document.querySelector("#timer-cancel");
var modalSetBtn = document.querySelector("#timer-set");
var progress = document.querySelector(".progress-bar");
var fill = document.querySelector(".fill");
var hourEl = document.querySelector("#timer-setHour");
var minuteEl = document.querySelector("#timer-setMinute");
var secondEl = document.querySelector("#timer-setSecond");
var countDownDisplayEl = document.querySelector("#timer-timeLeft");
var width;
var earlierTime = JSON.parse(localStorage.getItem("earlierTime"));

function goProgressBar(timeLeft) {
    width = 0;
    var interval = 100/(timeLeft+1);
    var timer = setInterval(function(){
        width = width + interval;
        fill.setAttribute("style", "width:" + width + "%" );
        if (width > 100) {
            clearInterval(timer);
            width = 0;          
        }
    }, 1000)
}

function goCountDown(timeLeft){

    goProgressBar(timeLeft);
    var countDown = setInterval(function(){
        if (timeLeft >= 0) {
            var hour = Math.floor(timeLeft/3600);
            var minute = Math.floor((timeLeft % 3600) / 60);
            var second = Math.floor((timeLeft % 3600) % 60);
            countDownDisplayEl.innerHTML = hour + "h " + minute + "m " + second + "s";
            timeLeft--;
        } else {
            clearInterval(countDown);
            countDownDisplayEl.setAttribute("class", "timer-hidden");
            location.assign("./endPage.html");
        }
    }, 1000)
}

setTimeBtnEl.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-show");

})

modalCancelBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
})

modalSetBtn.addEventListener("click", function(){
    let hour = Number(hourEl.value * 3600);
    let minute = Number(minuteEl.value * 60);
    let second = Number(secondEl.value);
    let timeLeft = Number(hour + minute + second - 1);
    storeTime(timeLeft);
    goCountDown(timeLeft);
    modalEl.setAttribute("class", "timer-hidden");
    progress.setAttribute("class", "timer-show");
    progress.classList.add("colume","progress-bar");
    countDownDisplayEl.setAttribute("class", "timer-show");
    progress.classList.add("timer-timeLeft");
})

function storeTime(timeLeft) {
    console.log(earlierTime);
    if (earlierTime !== null) {
        console.log("stored!");
        var hour = Math.floor(earlierTime/3600);
        var minute = Math.floor((earlierTime % 3600) / 60);
        var second = Math.floor((earlierTime % 3600) % 60); 
        hourEl.value = hour;
        minuteEl.value = minute;
        secondEl.value = second;
        localStorage.setItem("earlierTime", JSON.stringify(timeStore));
    } else {
        var hour = Math.floor(earlierTime/3600);
        var minute = Math.floor((earlierTime % 3600) / 60);
        var second = Math.floor((earlierTime % 3600) % 60); 
        hourEl.value = hour;
        minuteEl.value = minute;
        secondEl.value = second;
    }
    var timeStore = timeLeft + 1 ;
    localStorage.setItem("earlierTime", JSON.stringify(timeStore));
    console.log(earlierTime);
    console.log("sooo");
}

storeTime();