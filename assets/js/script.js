// Modal Popup Function To Show Chuck Norris Quote At End Of Timer 
var time_in_sec = 0;
var start_calling = '';
function showPopUp(){
 // start time update after popup modal show	
  start_calling = setInterval(countdownTime,1000); 
 }

function countdownTime(){
  time_in_sec++;
  html_tag.innerHTML = time_in_sec; 
  if(time_in_sec == 10){
clearInterval(start_calling) 
ClosePopUp();;
  }
}

function ClosePopUp(){
}

// Generate Random Chuck Norris Quote
const generateQuote = function() {
  let url;
  if(category !== "all") {
    url ="https://api.chucknorris.io/jokes/random" 
  }
}

