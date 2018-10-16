var imageArray = ["runner1.png", "runner2.png", "football.jpg"]
var distance;

function resetRace(){
window.location.reload();
}


    var startPos1 = 250;
    var startPos2 = 250;

function startRace() {

    var racing = setInterval(startRace, 1000);
    var ranNum = Math.floor(Math.random()*2);
    distance = Math.floor(Math.random()*20);
    document.getElementById('startButton').style.visibility='hidden';



  if(ranNum == 0){

    var race1 = startPos1 + distance;
    startPos1 += distance;
    document.getElementById("runner1").style.left = race1 + "px";

    } 

    else if (ranNum == 1){

    var race2 = startPos2 + distance;
    startPos2 += distance;
    document.getElementById("runner2").style.left = race2 + "px";
    
    
    winner()
    
    function winner(){
      if (startPos1 >= 1200)
      {
        
        alert("hi")
        stopRace()
        
      }
      else if (startPos2 >= 1200)
      {
        

        alert("Hi")
        stopRace()
      }
      
      function stopRace(){
        clearInterval(racing);
        }
      }
    }
  }

