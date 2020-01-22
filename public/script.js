const slider = document.getElementById("myRange");
const pointer = document.getElementById("dot");
const stargate = document.getElementById("stargate");
let angle = 0;
let angleTarget = 1000;
let angleForgivness = 10;
let angleMin = angleTarget - angleForgivness;
let angleMax = angleTarget + angleForgivness;
let rng;
let detector = false;
let points = 0;
let highScore;
let mistakes = 3;
let reaction = 3000;
let waiting = 2000;

function highScoreSet(){
if (typeof(Storage) !== "undefined") {
 // Retrieve
    highScore = localStorage.getItem("highScore");
    console.log(highScore);
    if (highScore === false){
        document.getElementById("highscore").innerHTML = "High Score: 0";
    }
    else{
        document.getElementById("highscore").innerHTML = "High Score: " + highScore;
    };
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
  };
  return highScore;
};
highScoreSet();

slider.oninput = function() {
  pointer.style.transform = "rotate(" + this.value + "deg)";
  stargate.style.transform = "rotate(" + this.value + "deg)";
  angle = this.value;
  console.log(angle);
};

setInterval(function(){
    if (angle >= angleMin && angle <= angleMax) {
        document.getElementById("triangle").style.borderColor = "transparent transparent greenyellow transparent";
        detector = true;
      }
      else {
        document.getElementById("triangle").style.borderColor = "transparent transparent red transparent";
        detector = false;
      };
    }, 16.5);

function startGame() {
    rng = Math.floor(Math.random() * 8) + 1;
    console.log("RNG: " + rng);

    if (rng === 1){
        document.getElementById("nova1").style.display = "block";
        angleTarget = 67.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 2){
        document.getElementById("nova2").style.display = "block";
        angleTarget = 157.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 3){
        document.getElementById("nova3").style.display = "block";
        angleTarget = 247.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 4){
        document.getElementById("nova4").style.display = "block";
        angleTarget = 337.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 5){
        document.getElementById("nova5").style.display = "block";
        angleTarget = 22.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 6){
        document.getElementById("nova6").style.display = "block";
        angleTarget = 112.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 7){
        document.getElementById("nova7").style.display = "block";
        angleTarget = 202.5;
        angleMin = angleTarget - angleForgivness;
        angleMax = angleTarget + angleForgivness;
    }
    else if (rng === 8){
        document.getElementById("nova8").style.display = "block";
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
            if (highScore <= points){
                document.getElementById("highscore").innerHTML = "High Score: " + points;
            };
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
                if (typeof(Storage) !== "undefined") {
                    // Store
                    if (highScore < points){
                    localStorage.setItem("highScore", points);
                    };
                  } else {
                    console.log("Sorry, your browser does not support Web Storage...");
                  };
                window.location='lose';
             };
         };
         document.getElementById("nova" + rng).style.display = "none";
            angleTarget = 1000;
            angleMin = angleTarget - angleForgivness;
            angleMax = angleTarget + angleForgivness;
         waitTimer();
        }, reaction);
  };

  function waitTimer() {
    document.getElementById("start").style.display = "none";
    document.getElementById("score").style.display = "block";
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