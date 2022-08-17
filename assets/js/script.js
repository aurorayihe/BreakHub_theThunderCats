var setTimeBtnEl = document.querySelector("#timer-set-time");
var modalEl = document.querySelector("#timer-modalContainer");
var modalCancelBtn = document.querySelector("#timer-cancel");
var modalSetBtn = document.querySelector("#timer-set");
var progress = document.querySelector(".progress-bar");
var fill = document.querySelector(".fill");

var time = 10;
var width;
var interval = 10/time;

function getTimeLeft() {
    
}

function goProgressBar() {
    width = 0;
    var timer = setInterval(function(){
        width = width + interval;
        fill.setAttribute("style", "width:" + width + "%" );
        
        fill.innerHTML = width + "%";
        if (width >= 100) {
            clearInterval(timer);
            width = 0;
        }
    }, 100)
}
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


}*/

setTimeBtnEl.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-show");

})

modalCancelBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
})

modalSetBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
    getTimeLeft();
    goProgressBar();
})
