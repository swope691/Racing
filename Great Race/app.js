var distance;
var racing
function resetRace(){
window.location.reload();
}


    var startPos1 = 250;
    var startPos2 = 250;

  
function startRace() {
    racing = setInterval(startRace, 1000);
    var ranNum = Math.floor(Math.random()*2);
    distance = Math.ceil(Math.random()*50);
    document.getElementById('startButton').style.visibility='hidden';
    document.getElementById('resetButton').style.visibility-'hidden';



  if(ranNum == 0){

    var race1 = startPos1 + distance;
    startPos1 += distance;
    document.getElementById("runner1").style.left = `${race1}px`;
    if (race1 > 1200)
      {
        console.log("racing")
        runner1Wins()
        stopRace()

        
      }
    } 

    else{

    var race2 = startPos2 + distance;
    startPos2 += distance;
    document.getElementById("runner2").style.left = `${race2}px`;
    }
    if (race2 > 1200)
      {
        console.log("racing")
        runner2Wins()
        stopRace()

        
      }
     


    
      function runner1Wins(){
        clearInterval(racing)
        ///document.getElementById("runner1").style.left = "750px";
        //document.getElementbyId("runner1").style.visibility = "hidden";
       // document.getElementById("runner2").style.left = "750px";
        stopRace()
        alert("runner1")
      }
      function runner2Wins(){
        clearInterval(racing)
        alert("runner2")
        ///document.getElementById("runner2").style.left = "750px";
        //document.getElementbyId("runner2").style.visibility = "hidden";
        //document.getElementById("runner1").style.left = "750px";
      }
        }
        function stopRace(){
          clearInterval(racing);
        }
      
    
  

