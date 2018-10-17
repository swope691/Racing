var distance;
var ranNum;
var racing;
var race1;
var race2;
var imageArray = ["runner1.png", "runner2.png"]
function resetRace(){
window.location.reload();
}


    var startPos1 = 250;
    var startPos2 = 250;

  function racing1()
  {
    ranNum = Math.floor(Math.random()*2);
    distance = Math.floor(Math.random()*250);
    
    if(ranNum == 0){

      race1 += distance;
      document.getElementById("runner1").style.left = `${race1}px`;
    }
    else if (ranNum == 1 ){
      race2 += distance;
      document.getElementById("runner2").style.left = `${race2}px`;
    }



    if (race1 > 1200)
      {
        clearInterval(racing);
        runner1Wins();
      }
      else if(race2 > 1200)
      {
        clearInterval(racing);
        runner2Wins();             
      }

    }
  
function startRace() {
  race1 = startPos1;
  race2 = startPos2;
  document.getElementById("startButton").style.visibility = "hidden";
  racing = setInterval(racing1, 1000);

} 

      function runner1Wins(){    
        document.getElementById("runner2").style.visibility = "hidden";
        document.getElementById("runner1").style.visibility = "hidden";
        document.getElementById("resetButton").src = imageArray[0]
        document.getElementById("resetButton").style.visibility = "visible";
      }
      function runner2Wins(){
        document.getElementById("runner1").style.visibility = "hidden";  
        document.getElementById("runner2").style.visibility = "hidden";
        document.getElementById("resetButton").src = imageArray[1]
        document.getElementById("resetButton").style.visibility = "visible";
      }
        
    
  

