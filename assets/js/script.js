var setTimeBtnEl = document.querySelector("#timer-set-time");
var modalEl = document.querySelector("#timer-modalContainer");
var modalCancelBtn = document.querySelector("#timer-cancel");
var modalSetBtn = document.querySelector("#timer-set");

setTimeBtnEl.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-show");
})

modalCancelBtn.addEventListener("click", function(){
    modalEl.setAttribute("class", "timer-hidden");
})

modalSetBtn.addEventListener("click", setTimer);

function setTimer(event) {

}