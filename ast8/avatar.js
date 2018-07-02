function Avatar(hero) {
  var self = this;

  this.upPressed = false;
  this.downPressed = false;

  self.xPosition = hero.x || 50;
  self.yPosition = hero.y || 0;
  self.height = hero.height;
  self.width = hero.width;
  self.$elem = document.createElement('div');
  self.$parent = hero.$parent;

  var plot = function() {
    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
    self.$elem.style.height = self.height + "px";
    self.$elem.style.width = self.width + "px";
  }

  self.init = function() {
    self.$elem.className = "avatar";
    self.$elem.width = self.width;
    self.$elem.height = self.height;
    plot();
    this.$parent.appendChild(this.$elem);
  }

  self.checkBoundaryCondition = function() {

    if ((self.yPosition === 300) && (self.downPressed)) {
      self.xPosition = self.xPosition;
      self.yPosition = 300;
      self.updateOurHero();
    } else if ((self.yPosition === 0) && (self.upPressed)) {
      
      self.xPosition = self.xPosition;
      self.yPosition = 0;
      self.updateOurHero();

    } else {
      checkButtonPressed();
    }
  }

  var checkButtonPressed = function() {

    if (self.upPressed) {
      self.xPosition = self.xPosition;
      self.yPosition -= 150;
      self.updateOurHero();
    }

    if (self.downPressed) {
      self.xPosition = self.xPosition;
      self.yPosition += 150;
      self.updateOurHero();
    }
  }


  self.updateOurHero = function() {
    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
  }

  self.updatePosition = function(e) {
    if (e === "up") {
      self.upPressed = true;
    }

    if (e === "down") {
      self.downPressed = true;
    }

    if (e == "upNegative") {
      self.upPressed = false;
    }

    if (e == "downNegative") {
      self.downPressed = false;
    }
  }
};


var keyUpHandler = function(key) {

  if (key.keyCode == 38) {
    avatarOne.updatePosition('upNegative');
  }
  if (key.keyCode == 40) {
    avatarOne.updatePosition('downNegative');
  }
  if (key.keyCode == 32) {
    spacePressed = false;
  }
}


var keyDownHandler = function(key) {

  if (key.keyCode == 38) {
    avatarOne.updatePosition('up');
  }

  if (key.keyCode == 40) {
    avatarOne.updatePosition('down');
  }

  if (key.keyCode == 32) {
    spacePressed = true;
  }

}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var $imageSlider = document.getElementsByClassName('image-slider')[0];

var avatarOne = new Avatar({
  height: 138,
  width: 109,
  $parent: $imageSlider,

})

avatarOne.init();
