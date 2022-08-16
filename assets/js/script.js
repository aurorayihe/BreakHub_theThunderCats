var setTimeBtnEl = document.querySelector("#timer-set-time");
var modalEl = document.querySelector("#timer-modalContainer");
var modalCancelBtn = document.querySelector("#timer-cancel");
var modalSetBtn = document.querySelector("#timer-set");
var totalTime;
var progress = document.querySelector(".progress-bar");
var fill = document.querySelector(".fill span");

var tracker;

/*
function goProgressBar(){
    var length = 0;
    length = Number(progress.style.width.replace(/%/, ""));
    if (length < 100) {
        progress.style.width = length + 0.2 + '%';
        fill.innerHTML = parseInt(progress.style.width) + '%';
        tracker = requestAnimationFrame(goProgressBar);
    }
}

/*
modalSetBtn.addEventListener("click", function(){
    getTime();
    setTimer();
});

function getTime(){
    var hourEl = document
}

function setTimer() {

}*/

setTimeBtnEl.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-show");

})

modalCancelBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
})

modalSetBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
    goProgressBar();
})
