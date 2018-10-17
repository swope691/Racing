var distance;
var racing;
var ranNum;
function resetRace(){
window.location.reload();
}


    var startPos1 = 250;
    var startPos2 = 250;

  function racing1()
  {
    ranNum = Math.floor(Math.random()*2);
    distance = Math.floor(Math.random()*50);
    racing = setInterval(startRace, 1000);
    if(ranNum == 0){

      var race1 = startPos1 + distance;
      startPos1 += distance;
      document.getElementById("runner1").style.left = `${race1}px`;
    }
    else if (ranNum == 1 ){
      var race2 = startPos2 + distance;
      startPos2 += distance;
      document.getElementById("runner2").style.left = `${race2}px`;
    }


    if (race1 > 1200)
      {
        clearInterval(racing1);
        alert("clear interval");
        runner1Wins();
      }
      else if(race2 > 1200)
      {
        clearInterval(racing1);
        alert("clear interval");
        runner2Wins();             
      }

    }
  
function startRace() {
  racing = setInterval(racing1, 1000);
} 

      function runner1Wins(){
        startPos1 = "250px";       
        alert("runner1");
      }
      function runner2Wins(){
        startPos2 = "250px";
        alert("runner2");   
      }
        
    
  

