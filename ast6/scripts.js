//conventation use$name of html element

 

var speed = 2;
var $environment = document.getElementById('environment');

var randNoGenerator= function(){
    return (Math.floor( Math.random()*480)+1);
}

var n=10;
var dataObject = new Array();
var x_direction = 1;
var y_direction = 1;

for(var i=0; i<n; i++){
    var $point = document.createElement('div');
    $point.className = "aPoint";
    $environment.appendChild($point);
    

}


//
//$point.onclick = function(){
//    console.log('asdfadsfsd');
//    $environment.removeChild($point);


for(var i=0; i<n ; i++){
    var temp = {
        x: randNoGenerator(),
        y: randNoGenerator(),
        dx:1,
        dy:1
        
    }
    dataObject.push(temp);
    
}


console.log(dataObject[0].$elem);


console.log(dataObject);

var $ball = document.getElementsByClassName('aPoint');
console.log($ball);

var it=0;
dataObject.forEach(function(item){
    item.$elem = $ball[it];
    it++;
})

console.log(dataObject);


dataObject.forEach(function(datum){
    updateBall(datum);
});

console.log(dataObject[1]);

 dataObject.forEach(function(item){
     item.$elem.onclick = function(){
         $environment.removeChild(item.$elem);
     }
 })




setInterval(function(){
    dataObject.forEach(function(item){
        checkBoundaryCollision(item);
        item.x += item.dx ;
        item.y += item.dy ;
        updateBall(item);
        });
    
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            
            if(dataObject[i] != dataObject[j]){
            if(checkBoxCollision(dataObject[i],dataObject[j])){
               changeDirection(dataObject[i],dataObject[j]);
               updateBall(dataObject[i]);
                
            }
            }
            
        }
    }
    
    dataObject.forEach(function(data){
        
    })
   
},10)

function changeColor(item){
    item.$elem.style.backgroud = "red";
    
}

function updateBall(ball){
    ball.$elem.style.top = ball.y + "px";
    ball.$elem.style.left = ball.x + "px";
    
}

function checkBoxCollision(redBall,yellowBall){
    if (( redBall.y + 30 >= yellowBall.y) &&
        ( redBall.x + 30 >= yellowBall.x) && 
        (redBall.x  < yellowBall.x + 30) &&
        (redBall.y < yellowBall.y +30)
       ){    
        
        return true;
    }
    
    
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





function changeDirection(ball){
    console.log("you should change your direction now");
    if( ball.dx === 1 ){
        ball.dx = -1 ;
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










































//
//
//var ball ={ 
//      x : randNoGenerator(),
//      y : randNoGenerator(),
//      dx: 1,
//     dy: 1,
//    $elem: $movingBall
//};
//
// var bBall = {
//      x: randNoGenerator(),
//      y: randNoGenerator(),
//      dx: 1,
//      dy: 1,
//      $elem: $blueBall
//  };
//  
//updateBall(bBall);
//
//updateBall(ball);
//
//setInterval(function(){
////    ball.x = ball.x + ball.dx * speed;
////    ball.y = ball.y + ball.dy * speed;
////     ball.x = ball.x *1 ;
////     ball.y = ball.y * 1;
//    
//    checkButtonPressed();
//    
//     if( checkBoxCollision(ball,bBall) || (checkBoxCollision(bBall,ball))){
//         changeDirection(ball);
//     };
//
//    updateBall(ball);
//    checkBoundaryCollision(ball);
//    
//    
//    
//    
//},100);
//
//function changeDirection(ball){
//    console.log("you should change your direction now");
//    if( ball.dx === 1 ){
//        ball.dx = -1;
//        if(ball.dy === 1){
//            ball.dy = -1;
//            }
//        else{
//            ball.dy = 1;
//        }
//    }
//    else{
//        ball.dx = 1;
//        if(ball.dy === 1){
//            ball.dy = -1;
//            }
//        else{
//            ball.dy = 1;
//        }
//    }
//    
//}
//
//
//
//function checkBoxCollision(redBall,yellowBall){
//    if (( redBall.y + 10 > yellowBall.y) &&
//        ( redBall.x + 10 > yellowBall.x) && 
//        (redBall.x  < yellowBall.x + 10) &&
//        (redBall.y < yellowBall.y +10)
//       ){    
//        
//        return true;
//    }
//    
//    
//}
//
//function checkButtonPressed(){
//       
//     if(rightPressed){
//          bBall.x = bBall.x + bBall.dx *1 *speed ;
//          bBall.y = bBall.y  + bBall.dy ;
//     }
//     if(leftPressed){
//          bBall.x = bBall.x + bBall.dx * -1  * speed;
//          bBall.y = bBall.y  + bBall.dy ;
//     } 
//     if(upPressed){
//          bBall.x = bBall.x + bBall.dx ;
//          bBall.y = bBall.y  + bBall.dy * speed * -1 ;
//     } 
//      if(downPressed){
//          bBall.x = bBall.x + bBall.dx ;
//          bBall.y = bBall.y  + bBall.dy * speed * 1 ;
//     } 
//       updateBall(bBall);
//       checkBoundaryCollision(bBall);
//      
//       
////       checkBoundaryCollision(backgroundBall);
//    
//}
//
//function updateBall(ball){
//    ball.$elem.style.top = ball.y + "px";
//    ball.$elem.style.left = ball.x + "px";
//}
//
//function checkBoundaryCollision(ball){
//   var ballLeft = ball.x ;
//   var ballRight = ballLeft + 10;
//    var ballTop = ball.y;
//    var ballBottom = ballTop + 10
//    var containerTop = 0;
//    var containerLeft = 0;
//    
//    if(ballTop <= containerTop){
//        ball.dy = ball.dy * -1;
//    }
//    
//    if(ballLeft <= containerLeft){
//        ball.dx = ball.dx * -1;
//    }
//    
//    if(ballRight >= 500){
//        ball.dx = ball.dx * -1;
//    }
//    
//    if(ballBottom >= 500){
//        ball.dy = ball.dy * -1;
//    }
//
//}
//
//document.addEventListener("keydown",keyDownHandler,false);
//document.addEventListener("keyup", keyUpHandler, false);
//
//function keyDownHandler(key){
//    if(key.keyCode == 39){
////        console.log('right arrow pressed');
//        rightPressed = true;
//    }
//    if(key.keyCode == 37 ){
//        leftPressed = true;
////        console.log('leftPressed ');
//    }
//     if(key.keyCode == 38){
////        console.log('up arrow pressed');
//        upPressed = true;
//    }
//    if(key.keyCode == 40){
////        console.log('down arrow pressed');
//        downPressed = true;
//    }
//    
//}
//
//function keyUpHandler(key){
//    if(key.keyCode == 39){
//        rightPressed= false;
//    }
//    if(key.keyCode == 37 ){
//        leftPressed = false;
//    }
//    if(key.keyCode == 38){
//        upPressed= false;
//    }
//    if(key.keyCode == 40){
//        downPressed= false;
//    }
//    
//}
//    

