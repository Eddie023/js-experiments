var gameover = false;

var startbg = false;
var $menu = document.getElementById('game-menu-bg');
var $button = document.getElementById('button');
var $gameOverImg = document.getElementById('game-over');
var $scoreMenu = document.getElementById('score-menu');

var score = 0;

$button.addEventListener("click", function() {
  $menu.style.display = 'none';
  startbg = true;


  if (startbg) {
    startBackground();
    mainloop();
  }


});

function mainloop() {

  var Game = setInterval(function() {

    if (gameover) {
      clearInterval(Game);
    } else {

      checkCollisionHeroAndEnemy();
      checkEnemyHealth(enimiesArray);
      avatarOne.checkBoundaryCondition();
      createEnemy();
      checkSpaceButtonPressed();
      counter++;
      checkwallcondition(enimiesArray);
      checkBladeAndEnemy(enimiesArray, bladesArray);
      score++;
      $scoreMenu.innerHTML = "Score:" + score;
    }
  }, 100)
}




function checkBladeAndEnemy(enimies, blades) {

  for (var i = 0; i < blades.length; i++) {
    for (var j = 0; j < enimies.length; j++) {
      if ((blades[i].xPosition < (enimies[j].xPosition + enimies[j].width)) &&
        (blades[i].yPosition === (enimies[j].yPosition + 50))
        && ((blades[i].xPosition+ blades[i].width) > enimies[j].xPosition )
      ) {
        console.log(blades.length);
        blades[i].deleteBlade();
        // blades[i].xPosition = 0;
        blades.splice(i, 1);
        console.log(blades.length);
        enimies[j].health = enimies[j].health - 1;
        if(enimies[j].health <= 0){
          enimies[j].health = 0;
          return 1;
        }
        console.log('the health is : ', enimies[j].health);
      }
    }
    // blades[i].deleteBlade();
    // blades.slice(0,i);
  }
}

function checkCollisionHeroAndEnemy() {

  for (var i = 0; i < enimiesArray.length; i++) {
    if ((enimiesArray[i].yPosition === (avatarOne.yPosition)) &&
      (
        enimiesArray[i].xPosition <= (150)
      )) {
      gameover = true;
      stopBackground = true;
      console.log("GAMEOVER");
      gameOverImage();
    }
  }
}


function gameOverImage() {

  $gameOverImg.style.visibility = 'visible';
  $scoreMenu.style.marginLeft = "100px";
  $scoreMenu.style.fontSize = "100px";
  $scoreMenu.style.width = "200px";
  $scoreMenu.style.height = "200px";
  $scoreMenu.style.backgroundColor = 'transparent';
}
