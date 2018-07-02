var $imageSlider = document.getElementsByClassName('image-slider')[0];

function Enemy(enemy) {
  var self = this;

  var randomNumberGenerator = function() {
    var rand = Math.random();
    if (rand >= 0.00 && rand < 0.33) {
      return (0);
    }
    if (rand >= 0.33 && rand < 0.66) {
      return (150);
    } else {
      return (300);
    }
  }

  self.xPosition = 800; //randomgenerator;
  self.yPosition = randomNumberGenerator();
  self.xDirection = -1;
  self.yDirection = 1;
  self.height = 90;
  self.width = 120;
  self.health = 3;
  self.$elem = document.createElement('div');
  self.$parent = enemy.$parent;

  var plot = function() {
    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
    self.$elem.style.height = self.height + "px";
    self.$elem.style.width = self.width + "px";
  }

  self.init = function() {
    self.$elem.className = "enemy";
    self.$elem.width = self.width;
    self.$elem.height = self.height;
    plot();
    this.$parent.appendChild(this.$elem);
  }


  self.updateOurEnemy = function() {
    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
  }


  self.startMoving = function() {
    if (self.xPosition === 0) {
      self.xPosition = 0;
      return 1;
    } else {

      if (self.xPosition === null) {
        return 1;

      } else {

        self.xPosition += self.xDirection * 10;
        // console.log(" xposition is ", self.xPosition);
        self.updateOurEnemy();
      }
    }
  };

  self.deleteEnemy = function() {
    self.$elem.remove();
  }
};

//enemies class end

var enimiesArray = new Array();
var counter = 0;

function createEnemy() {

  if (counter >= 10) {
    var enemy = new Enemy({
      $parent: $imageSlider,
    });
    // console.log('new enemy created');
    enimiesArray.push(enemy);
    enemy.init();
    counter = 0;
  }
  // console.log(enimiesArray);
  enimiesArray.forEach(function(item) {
    item.startMoving();
    item.updateOurEnemy();
  })
}

function checkEnemyHealth(input) {

  input.forEach(function(item, index) {
    if (item.health === 0) {
      item.deleteEnemy();
      input.splice(index,1);
    } else {
      return 1;
    }
  })
}

function checkwallcondition(input) {
  if (input.length === 0) {
    return 1;
  } else {
    input.forEach(function(enemy, index) {
      if (enemy.xPosition <= 0) {
        enemy.deleteEnemy();
        input.splice(0, index + 1);
        return 1;
      } else {
        enemy.startMoving();
        enemy.updateOurEnemy();
      }
    })
  }
}
