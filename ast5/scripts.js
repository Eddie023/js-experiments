//conventation use$name of html element

var speed = 15;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;


var $environment = document.getElementById('environment');

var $blueBall = document.createElement('div');
$blueBall.className = 'aBlueBall';
$environment.appendChild($blueBall);

var $movingBall = document.createElement("div"); 
$movingBall.className = "ball" ;
$environment.appendChild($movingBall);
var speed = 15;

var randNoGenerator= function(){
    return (Math.floor( Math.random()*500)+1);
}


var ball ={ 
      x : randNoGenerator(),
      y : randNoGenerator(),
      dx: 1,
     dy: 1,
    $elem: $movingBall
};

 var bBall = {
      x: randNoGenerator(),
      y: randNoGenerator(),
      dx: 1,
      dy: 1,
      $elem: $blueBall
  };
  
updateBall(bBall);

updateBall(ball);

setInterval(function(){
    ball.x = ball.x + ball.dx * speed;
    ball.y = ball.y + ball.dy * speed;
     ball.x = ball.x *1 ;
     ball.y = ball.y * 1;
    
    checkButtonPressed();
    
     if( checkBoxCollision(ball,bBall)){
         changeDirection(ball);
     };

    updateBall(ball);
    checkBoundaryCollision(ball);
    
    
    
    
},100);

function changeDirection(ball){
    console.log("you should change your direction now");
    if( ball.dx === 1 ){
        ball.dx = -1;
        if(ball.dy === 1){
            ball.dy = -1;
            }
        else{
            ball.dy = 1;
        }
    }
    else{
        ball.dx = 1;
        if(ball.dy === 1){
            ball.dy = -1;
            }
        else{
            ball.dy = 1;
        }
    }
    
}



function checkBoxCollision(redBall,yellowBall){
    if (( redBall.y + 20 >= yellowBall.y) &&
        ( redBall.x + 20 >= yellowBall.x) && 
        (redBall.x  <= yellowBall.x + 20) &&
        (redBall.y <= yellowBall.y +20)
       ){    
        
        return true;
    }
    
    
}

function checkButtonPressed(){
       
     if(rightPressed){
          bBall.x = bBall.x + bBall.dx *1 *speed ;
          bBall.y = bBall.y  + bBall.dy ;
     }
     if(leftPressed){
          bBall.x = bBall.x + bBall.dx * -1  * speed;
          bBall.y = bBall.y  + bBall.dy ;
     } 
     if(upPressed){
          bBall.x = bBall.x + bBall.dx ;
          bBall.y = bBall.y  + bBall.dy * speed * -1 ;
     } 
      if(downPressed){
          bBall.x = bBall.x + bBall.dx ;
          bBall.y = bBall.y  + bBall.dy * speed * 1 ;
     } 
       updateBall(bBall);
       checkBoundaryCollision(bBall);
      
       
//       checkBoundaryCollision(backgroundBall);
    
}

function updateBall(ball){
    ball.$elem.style.top = ball.y + "px";
    ball.$elem.style.left = ball.x + "px";
}

function checkBoundaryCollision(ball){
   var ballLeft = ball.x ;
   var ballRight = ballLeft + 10;
    var ballTop = ball.y;
    var ballBottom = ballTop + 10
    var containerTop = 0;
    var containerLeft = 0;
    
    if(ballTop <= containerTop){
        ball.dy = ball.dy * -1;
    }
    
    if(ballLeft <= containerLeft){
        ball.dx = ball.dx * -1;
    }
    
    if(ballRight >= 500){
        ball.dx = ball.dx * -1;
    }
    
    if(ballBottom >= 500){
        ball.dy = ball.dy * -1;
    }

}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(key){
    if(key.keyCode == 39){
//        console.log('right arrow pressed');
        rightPressed = true;
    }
    if(key.keyCode == 37 ){
        leftPressed = true;
//        console.log('leftPressed ');
    }
     if(key.keyCode == 38){
//        console.log('up arrow pressed');
        upPressed = true;
    }
    if(key.keyCode == 40){
//        console.log('down arrow pressed');
        downPressed = true;
    }
    
}

function keyUpHandler(key){
    if(key.keyCode == 39){
        rightPressed= false;
    }
    if(key.keyCode == 37 ){
        leftPressed = false;
    }
    if(key.keyCode == 38){
        upPressed= false;
    }
    if(key.keyCode == 40){
        downPressed= false;
    }
    
}
    

