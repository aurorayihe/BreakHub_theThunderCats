var key = "RQ0TBDIohRuCjsqhORoyNDs2m6PxD9OS";
var url = "https://api.giphy.com/v1/gifs/search?q=back+to+work&api_key=" + key;
var setTimer = document.querySelector("#relax");
var workEl = document.querySelector("#work");
var titleEl = document.querySelector("h1");

function getGif() {
    fetch(url)
        .then (function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then (function (queryResult) {
            showImage(queryResult);
        })
}

function showImage(queryResult) {
    var index = Math.floor(Math.random() * 50);
    var imgUrl = queryResult.data[index].images.original.url;
    var gitImg = document.createElement('img');
    gitImg.setAttribute("class", "work-gif");
    gitImg.src = imgUrl;
    var imgContainer = document.querySelector("#gif-image");
    imgContainer.appendChild(gitImg);
}


function checkContent() {
    var checkpoint = document.querySelectorAll(".work-gif");
    console.log(checkpoint);
    if (checkpoint.length == 0) {
        getGif();
        return;
    } else {
        checkpoint[0].parentNode.removeChild(checkpoint[0]);
        getGif();
    }

}

checkContent();

setTimer.addEventListener("click", function(){
    location.assign("./index.html");
})


workEl.addEventListener("click", function(){
    titleEl.innerHTML = "GOOOOOOOOD";
})