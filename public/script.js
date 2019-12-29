const slider = document.getElementById("myRange");
const pointer = document.getElementById("dot");
let angle = 0;
let angleTarget = 1000;
let angleForgivness = 10;
let angleMin = angleTarget - angleForgivness;
let angleMax = angleTarget + angleForgivness;
let rng;
let detector = false;
let points = 0;
let mistakes = 3;
let reaction = 3000;
let waiting = 2000;

slider.oninput = function() {
  pointer.style.transform = "rotate(" + this.value + "deg)";
  angle = this.value;
  console.log(angle);
};

setInterval(function(){
    if (angle >= angleMin && angle <= angleMax) {
        document.getElementById("pointer").style.background = "greenyellow";
        detector = true;
      }
      else {
        document.getElementById("pointer").style.background = "red";
        detector = false;
      };
    }, 16.5);

function startGame() {
    rng = Math.floor(Math.random() * 8) + 1;
    console.log("RNG: " + rng);

    if (rng === 1){
        document.getElementById("dot1").style.opacity = "1";
        angleTarget = 67.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 2){
        document.getElementById("dot2").style.opacity = "1";
        angleTarget = 157.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 3){
        document.getElementById("dot3").style.opacity = "1";
        angleTarget = 247.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 4){
        document.getElementById("dot4").style.opacity = "1";
        angleTarget = 337.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 5){
        document.getElementById("dot5").style.opacity = "1";
        angleTarget = 22.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 6){
        document.getElementById("dot6").style.opacity = "1";
        angleTarget = 112.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 7){
        document.getElementById("dot7").style.opacity = "1";
        angleTarget = 202.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 8){
        document.getElementById("dot8").style.opacity = "1";
        angleTarget = 292.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    };
    console.log("Max: " + angleMax + " / Min: " + angleMin);
    gameTimer();
};

function gameTimer() {
    console.log("timer started");
    setTimeout(function(){
         if (detector === true){
            points = points + 1;
            document.getElementById("score").innerHTML = "Score: " + points;
            console.log("Points: " + points);
         }
         else if (detector === false){
             mistakes = mistakes - 1;
             console.log("Mistakes left: " + mistakes);
             if (mistakes === 2){
                document.getElementById("redX1").style.display = "block";
             }
             else if (mistakes === 1){
                document.getElementById("redX2").style.display = "block";
             }
             else if (mistakes === 0){
                document.getElementById("redX3").style.display = "block";
             }
             else if (mistakes === -1){
                window.location='lose';
             };
         };
         document.getElementById("dot" + rng).style.opacity = "0";
            angleTarget = 1000;
            angleMin = angleTarget - angleForgivness;
            angleMax = angleTarget + angleForgivness;
         waitTimer();
        }, reaction);
  };

  function waitTimer() {
    document.getElementById("start").style.display = "none";
    console.log("wait timer started");
    setTimeout(function(){
        reaction = (2.13 * (points**2)) + (-153.265 * points) + 2845;
        console.log("Reaction: " + reaction);
        waiting = (0.6475*(points**2)) + -72.985*points + 2182;
        console.log("WaitingTime: " + waiting);

        if (points === 4){
            angleForgivness = 9;
        }
        else if (points === 8){
            angleForgivness = 8
        }
        else if (points === 12){
            angleForgivness = 7
        }
        else if (points === 16){
            angleForgivness = 6
        }
        else if (points === 20){
            angleForgivness = 5
        }
        else if (points === 25){
            angleForgivness = 4
        }
        else if (points === 30){
            angleForgivness = 3.5
        };

         startGame();
        }, waiting);
  };