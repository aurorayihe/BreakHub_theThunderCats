var count=-1; // initially -1 as we are having a delay of 1000ms

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
    
  count=count+1;
  if (count >=6) //+1 than the req time as we have a delay of 1000ms
  {
     clearInterval(counter);
     /////////////what code should go here for the modal to pop up??///////////////////////
      $("#myModal").modal();
      
     return;
  }
    document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}
