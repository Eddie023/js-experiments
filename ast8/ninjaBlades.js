function NinjaBlade(props) {
  var self = this;

  self.xPosition = props.xPosition + 100;
  self.yPosition = props.yPosition + 50;
  self.xDirection = 1;
  self.height = 50;
  self.width = 50;
  self.$elem = document.createElement('div');
  self.$parent = props.$parent;

  var plot = function() {

    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
    self.$elem.style.height = self.height + "px";
    self.$elem.style.width = self.width + "px";
    self.$elem.style.backgroundImage = "url('./images/ninjablade.png')";
  }

  self.init = function() {
    self.$elem.className = "ninjaBlade";
    self.$elem.width = self.width;
    self.$elem.height = self.height;
    plot();
    this.$parent.appendChild(this.$elem);
  }

  self.deleteBlade = function() {
    // console.log('i am called');
    self.$elem.remove();
  }

  self.updateBlades = function() {

    self.$elem.style.top = self.yPosition + "px";
    self.$elem.style.left = self.xPosition + "px";
  }

  self.startMovingBlades = function() {

    setInterval(function() {
      if (self.xPosition === 850) {
        self.xPosition = 850;
        return 1;
      } else {
        self.xPosition += self.xDirection * 1;
        // console.log('thex position of blades is ',self.xPosition);
        self.updateBlades();
      }
    }, 10)
  };

  self.updatePosition = function(e) {

    if (e === "space") {
      self.spacePressed = true;
    }
    if (e === "spaceNegative") {
      self.spacePressed = false;
    }
  };
};



var $imageSlider = document.getElementsByClassName('image-slider')[0];

var spacePressed = false;
var bladesArray = new Array();

var checkSpaceButtonPressed = function() {

  if (spacePressed) {
    var blade = new NinjaBlade(avatarOne);
    bladesArray.push(blade);

  }
  moveBlade(bladesArray);
  // console.log(bladesArray);
};

function moveBlade(bladesArray) {
  bladesArray.forEach(function(blade, index) {

    blade.init();
    blade.updateBlades();

    if (blade.xPosition >= 850) {
      blade.deleteBlade();
      bladesArray.splice(0, index + 1);
    } else {
      blade.startMovingBlades();
      blade.updateBlades();
    }
  })
}
