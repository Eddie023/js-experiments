var $body = document.getElementsByTagName('body')[0];



function Container(props, ) {
  this.height = props.height;
  this.width = props.width;
  this.$parent = props.$parent;
  this.$elem = document.createElement('div');
  this.color = props.color;
  this.boxes = [];

  var self = this;

  this.plot = function() {
    self.$elem.style.className = "container";
    self.$elem.style.height = self.height + "px";
    self.$elem.style.width = self.width + "px";
    self.$elem.style.background = self.color;
    self.$elem.style.position = "relative";
    self.$parent.appendChild(self.$elem);

  };

  this.addBoxes = function(box) {
    this.boxes.push(box);

  };

  this.startSmashing = function() {
    console.log('i am called');
    console.log(this.boxes);
    setInterval(function() {

      self.boxes.forEach(function(ball) {
        ball.checkBoundaryCollision(ball);
        ball.updatePosition();
        ball.plot();
      })

      for (i = 0; i < self.boxes.length; i++) {
        for (j = 0; j < self.boxes.length; j++) {

          if (self.boxes[i] != self.boxes[j]) {
            if (self.boxes[i].checkBoxCollision(self.boxes[i], self.boxes[j])) {

              self.boxes[i].changeDirection(self.boxes[i]);
              self.boxes[j].changeDirection(self.boxes[j]);
              self.boxes[i].updatePosition();

            }
          }

        }
      }



    }, 10);



  }

};


function Box(props) {

  var randNoGenerator = function() {
    return (Math.floor(Math.random() * 480) + 1);
  };
  this.x = randNoGenerator();
  this.y = randNoGenerator();
  this.$parent = props.$parent;
  this.height = props.h || 50;
  this.width = props.width || 50;
  this.dx = props.dx || 1;
  this.dy = props.dy || 1;
  this.$elem = document.createElement("div");
  var self = this;


  this.$elem.onclick = function() {
    console.log("i am alsdfkajs;lfkasdfj");
    console.log(self.$elem);
    console.log(self.$parent.boxes.indexOf(self));
    self.$parent.boxes.splice(self.$parent.boxes.indexOf(self), 1);
    console.log(self.$parent.boxes.length);
    self.$elem.remove();

  }


  var plotPosition = function() {

    //    console.log("PLOTPOSITION IS CALLED:");
    self.$elem.style.top = self.y + "px";
    self.$elem.style.left = self.x + "px";
    self.$elem.style.position = 'absolute';
    self.$elem.style.background = 'red';
    self.$elem.style.height = 10 + "px";
    self.$elem.style.width = 10 + "px";

  };

  this.checkBoundaryCollision = function(ball) {
    var ballLeft = ball.x;
    var ballRight = ballLeft + 10;
    var ballTop = ball.y;
    var ballBottom = ballTop + 10
    var containerTop = 0;
    var containerLeft = 0;

    if (ballTop <= containerTop) {
      ball.dy = ball.dy * -1;
    }

    if (ballLeft <= containerLeft) {
      ball.dx = ball.dx * -1;
    }

    if (ballRight >= 500) {
      ball.dx = ball.dx * -1;
    }

    if (ballBottom >= 500) {
      ball.dy = ball.dy * -1;
    }

  }

  this.init = function() {

    //    console.log("INIT IS CALLED", this);

    this.$elem.className = "box";

    this.$elem.width = this.width;

    this.$elem.height = this.height;

    plotPosition();

    this.$parent.$elem.appendChild(this.$elem);

  };
  this.plot = function() {
    plotPosition();

  };



  this.updatePosition = function() {

    this.x += this.dx;

    this.y += this.dy;

  };



  this.changeDirection = function(ball) {
    console.log("you should change your direction now");
    if (ball.dx === 1) {
      ball.dx = -1;
      if (ball.dy === 1) {
        ball.dy = -1;
      } else {
        ball.dy = 1;
      }
    } else {
      ball.dx = 1;
      if (ball.dy === 1) {
        ball.dy = -1;
      } else {
        ball.dy = 1;
      }
    }

  };

  this.checkBoxCollision = function(redBall, yellowBall) {
    if ((redBall.y + 10 >= yellowBall.y) &&
      (redBall.x + 10 >= yellowBall.x) &&
      (redBall.x < yellowBall.x + 10) &&
      (redBall.y < yellowBall.y + 10)
    ) {

      return true;
    }

  }




}



var container1 = new Container({

  height: 500,

  width: 500,

  $parent: $body,
  color: 'lightblue',

});

var container2 = new Container({
  height: 500,
  width: 500,
  $parent: $body,
  color: 'lightgreen'

})

container1.plot();
container2.plot();

var boxOne = new Array();


for (i = 0; i < 30; i++) {
  boxOne.push(new Box({
    $parent: container1,
  }))

}

boxOne.forEach(function(item) {
  item.init();
  container1.addBoxes(item);
})

boxOne.forEach(function(item){
    item.$elem.onclick = function(){
       item.$parent.$elem.removeChild(item.$elem);
    }
})

var boxTwo = new Array();

for(i=0;i<15;i++){
   boxTwo.push(new Box({
       $parent: container2,
   }))
}


boxTwo.forEach(function(item){
   item.init();
   container2.addBoxes(item);
})

boxTwo.forEach(function(item){
    item.$elem.onclick = function(){
       item.$parent.$elem.removeChild(item.$elem);
    }
})

container1.startSmashing();
container2.startSmashing();
