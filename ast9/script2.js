var $mainWrapper = document.getElementById("main-wrapper");
var $homeScreen = document.getElementById("home-screen");
var $gameOverWrapper = document.getElementById("gameover-wrapper");
var $restartButton = document.getElementById("restart-button");
var $startButton = document.getElementById("start-button");
var $finalScore = document.getElementById("final-score");

const MIDDLE_GAP = 120;
const MAX_WIDTH = 420;
const MIN_WIDTH = 220;

let spacePressed = false;
let gameover = false;
let temp = 0;
let score = 0;
let restartGame = false;



class FlappyBird {
  constructor(props) {
    this.$parent = props.$parent;
    this.xPosition = 50;
    this.yPosition = 50;
    this.yDirection = 1;
    this.height = 24;
    this.width = 34;
    this.drag = 0.99;
    this.gravity = 1.8;
    this.angle = 0;
    this.$elem = document.createElement('div');
    this.init();
    document.onkeydown = this.keyDownHandler;
    document.onkeyup = this.keyUpHandler;

  }

  init() {
    this.$elem.className = "flappy-bird";
    this.$elem.style.top = this.yPosition + "px";
    this.$elem.style.left = this.xPosition + "px";
    this.$elem.style.height = this.height + "px";
    this.$elem.style.width = this.width + "px";
    this.$parent.appendChild(this.$elem);
  }

  update() {
    this.$elem.style.top = this.yPosition + "px";
    this.$elem.style.left = this.xPosition + "px";
  }

  startMoving() {
    if (spacePressed) {
      // console.log('if space pressed ');
      this.angle = -30;
      this.yDirection = -15;
      this.update();
    } else {
      this.yDirection += this.gravity;
      this.yPosition += this.yDirection;
      this.rotate();
      this.update();
    }

  }

  rotate() {

    this.angle += 5;
    this.$elem.style.transform = "rotate(" + this.angle + "deg)";
  }

  destroyBird(){
    this.$elem.remove();
  }
  keyDownHandler(event) {

    var self = this;
    if (event.keyCode === 32) {

      spacePressed = true;

    }
  };

  keyUpHandler(event) {

    if (event.keyCode === 32) {

      spacePressed = false;
    }
  }

};


class Pipes {
  constructor(props) {
    this.$parent = props.$parent;
    this.xPosition = 550;
    this.yPosition = this.randomNumberGenerator();
    // this.yPosition = 250;
    this.height = 300;
    this.topPosition = this.yPosition - this.height - MIDDLE_GAP;
    this.xDirection = -1;
    this.init();

    this.width = 52;
  }

  randomNumberGenerator() {

    var rand = Math.floor(Math.random() * (400 - 220) + 240);

    return (rand);
  }

  createElem() {
    this.$topPipeElem = document.createElement('div');
    this.$bottomPipeElem = document.createElement('div');
  }

  destroyPipes(){
    this.$topPipeElem.remove();
    this.$bottomPipeElem.remove();
  }
  init() {
    this.createElem();

    this.$topPipeElem.className = "pipes";
    this.$topPipeElem.style.transform = "rotate(180deg)"
    // this.$topPipeElem.style.top = this.yPosition - this.height -120 + "px";
    this.$topPipeElem.style.top = this.topPosition + "px";
    this.$topPipeElem.style.left = this.xPosition + "px";
    this.$topPipeElem.style.height = this.height + "px";
    this.$topPipeElem.style.width = this.width + "px";
    // this.$topPipeElem.style.background = "blue";

    this.$bottomPipeElem.className = "pipes";
    this.$bottomPipeElem.style.top = this.yPosition + "px";
    this.$bottomPipeElem.style.left = this.xPosition + "px";
    this.$bottomPipeElem.style.height = this.height + "px";
    this.$bottomPipeElem.style.width = this.width + "px";
    // this.$bottomPipeElem.style.background = "green";


    this.$parent.appendChild(this.$topPipeElem);
    this.$parent.appendChild(this.$bottomPipeElem);
  }
  movePipes() {

    if (this.xPosition === 0) {
      this.xPosition = 0;
    } else {
      this.xPosition += this.xDirection * 2;
    }


  }

  updatePipes() {
    this.$topPipeElem.style.left = this.xPosition + "px";
    this.$bottomPipeElem.style.left = this.xPosition + "px";

  }

  animatePipes() {
    this.movePipes();
    this.updatePipes();
  }

  removePipes() {
    this.$topPipeElem.remove();
    this.$bottomPipeElem.remove();
  }
};


class Container {
  constructor(props) {
    this.$parent = props.$parent;
    this.$homeScreen = props.$homeScreen;

    this.init();
    this.startGamePlay();
    this.pipesArray = new Array();
    this.counter = 0;

  }

  init() {
    this.$elem = document.createElement("div");
    this.$elem.className = "container-wrapper";
    this.$parent.appendChild(this.$elem);
    this.$elem.style.height = "512px";
    this.$elem.style.width = "512px";

  }

  createPipes() {

    if (this.counter >= 55) {
      let pipe = new Pipes({
        $parent: $mainWrapper,
      });

      this.pipesArray.push(pipe);
      pipe.init();
      this.counter = 0;
    }
    this.pipesArray.forEach(function(item) {
      item.animatePipes();
    })
  }

  checkwallcondition(pipesArray) {
    if (pipesArray.length === 0) {
      return 1;
    } else {

      pipesArray.forEach(function(pipe, index) {

        if (pipe.xPosition === 0) {
          pipe.removePipes();
          pipesArray.splice(0, index + 1);
          return 1;
        } else {
          pipe.animatePipes();
        }
      })
    }
  }


  createBird() {
    this.flappyBird = new FlappyBird({
      $parent: $mainWrapper,
    });
    this.flappyBird.init();
    // this.flappyBird.startMoving();
    // return flappyBird;
  }

  checkBirdPipeCollision(bird, pipes) {

    let birdRight = bird.xPosition + bird.width;
    if (pipes.length === 0) {
      return 1;
    } else {
      pipes.forEach(function(pipe) {

        if ((birdRight >= pipe.xPosition) &&
          ((bird.yPosition > (pipe.yPosition)) || (bird.yPosition < (pipe.topPosition + pipe.height)))) {

          console.log('collision');
          gameover = true;

        }
        if ((birdRight > pipe.xPosition + pipe.width) && ((bird.yPosition >= pipe.yPosition) ||
            (bird.yPosition >= (pipe.topPosition + pipe.height)))) {
          temp += 1;
          return 1;
        }
      });
    }
  };

   destroyContainer(){
    this.flappyBird.destroyBird();
    this.pipesArray.forEach(function(item,index){
       item.destroyPipes();

     })
    this.pipesArray.splice(0,this.pipesArray.length);
   console.log(this.pipesArray);
   }


  startGamePlay() {

    let self = this;
    self.createBird();

    let gameLoop = setInterval(function() {

      self.flappyBird.startMoving();

      self.createPipes();
      self.checkwallcondition(self.pipesArray);
      self.checkBirdPipeCollision(self.flappyBird, self.pipesArray);
      self.counter += 1;

      score = Math.floor(temp / 8);
      self.$elem.innerHTML = "Score :" + score;
      if(gameover === false){
        $gameOverWrapper.style.display = "none";
      }

      if (gameover === true) {
        console.log('GAMEOVER');
        temp = 0;
        $gameOverWrapper.style.display = "block";
        clearInterval(gameLoop);
        gameover = false;
      }
    }, 40);
  }
};




class Game {
  constructor(props) {
    this.$parent = props.$parent;
    this.$startButton = props.$startButton;
    this.$homeScreen = props.$homeScreen;
    this.$gameOverWrapper = props.$gameOverWrapper;
    // this.$finalScore = props.$finalScore;
    this.addStartEvent();
  }
  createContainer() {
    this.container = new Container({
      $parent: this.$parent,
      $homeScreen: this.$homeScreen,
      $gameOverWrapper: this.$gameOverWrapper,
      $finalScore: this.$finaScore
    });
    // return newContainer;
    // console.log(this.container);
  };

  addStartEvent() {
    this.$startButton.onclick = () => {
      this.$homeScreen.style.display = "none";
      this.createContainer();
  };

}
  removeContainer(){
    this.container.destroyContainer();
  }
  restartGame(){
    this.$homeScreen.style.display = "block";
    newGame.addStartEvent();
    // restartGame = false;

  }

};

let newGame = new Game({
  $parent: $mainWrapper,
  $startButton: $startButton,
  $homeScreen: $homeScreen,

});

newGame.addStartEvent();


$restartButton.onclick = function() {
  restartGame = true;
  console.log('clicked');
  if(restartGame){
    newGame.removeContainer();
    newGame.restartGame();
    restartGame = false;
  }
  // newGame.removeContainer();
  // newGame.restartGame();
}
console.log(restartGame);
