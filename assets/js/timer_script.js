var setTimeBtnEl = document.querySelector("#timer-set-time");
var modalEl = document.querySelector("#timer-modalContainer");
var modalCancelBtn = document.querySelector("#timer-cancel");
var modalSetBtn = document.querySelector("#timer-set");
var progress = document.querySelector(".progress-bar");
var fill = document.querySelector(".fill");
var hourEl = document.querySelector("#timer-setHour");
var minuteEl = document.querySelector("#timer-setMinute");
var secondEl = document.querySelector("#timer-setSecond");
var hourLeftEl = document.querySelector("#hour");
var minuteLeftEl = document.querySelector("#munite");
var secondLeftEl = document.querySelector("#second");
var width;

function goProgressBar(hour,minute,second) {
    width = 0;
    let timeLeft = hour * 3600 + minute * 60 + second;
    var interval = 10/timeLeft;
    var timer = setInterval(function(){
        width = width + interval;
        fill.setAttribute("style", "width:" + width + "%" );
        if (width >= 100) {
            clearInterval(timer);
            width = 0;
            location.assign("./endPage.html");
        }
    }, 100)
}

function goCountDown(hour, minute, second){
    var countDown = setInterval(function(){
        if (second == 0) {
            if (minute == 0) {
                
            }
        } else {
            secondLeftEl.innerText = second;
            second--;
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
    let hour = hourEl.value;
    let minute = minuteEl.value;
    let second = secondEl.value;
    goCountDown(hour, minute, second);
    modalEl.setAttribute("class", "timer-hidden");
    goProgressBar(hour, minute,second);

})
