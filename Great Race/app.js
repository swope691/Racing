var distance;
var racing;
function resetRace(){
window.location.reload();
}


    var startPos1 = 250;
    var startPos2 = 250;

  function racing1()
  {
   racing = setInterval(startRace, 1000);

  }
function startRace() {
   racing1()
    var ranNum = Math.floor(Math.random()*2);
    distance = Math.floor(Math.random()*50);
    document.getElementById('startButton').style.visibility='hidden';
    document.getElementById('resetButton').style.visibility-'hidden';



  if(ranNum == 0){

    var race1 = startPos1 + distance;
    startPos1 += distance;
    document.getElementById("runner1").style.left = `${race1}px`;
    if (race1 > 1200)
      {
        clearInterval(racing)
        runner1Wins()
        

        
      }
    } 

    else{

    var race2 = startPos2 + distance;
    startPos2 += distance;
    document.getElementById("runner2").style.left = `${race2}px`;
    }
    if (race2 > 1200)
      {
        clearInterval(racing)
        runner2Wins()
     

        
      }
     


    
      function runner1Wins(){
        clearInterval(racing)
        startPos1 = "250px"
        document.getElementById("runner1").style.left = "750px";
        document.getElementbyId("runner1").style.visibility = "hidden";
       // document.getElementById("runner2").style.left = "750px";
        alert("runner1")
      }
      function runner2Wins(){
        clearInterval(racing)
        startPos2 = "250px"
        alert("runner2")
        document.getElementById("runner2").style.left = "750px";
        document.getElementbyId("runner2").style.visibility = "hidden";
        //document.getElementById("runner1").style.left = "750px";
      }
        }
        function stopRace(){
          clearInterval(racing);
        }
      
    
  

