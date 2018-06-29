//conventation use$name of html element
var $container = document.getElementById("container");

function Ballclass(item){
    
    var randNoGenerator = function(){
     return (Math.floor( Math.random()*480)+1);
     };
    
    this.x = item.x || randNoGenerator();
    this.y = item.x || randNoGenerator();
    this.dx = item.dx || 1;
    this.dy = item.dy || 1;
    this.$parent = item.$parent;
    this.$height = item.$height || 20;
    this.$width = item.$width || 20;
    self = this;
    
    this.$elem = document.createElement('div');
    
    
    
       ///not using this inside class creates private function
       var plotPosition = function (){
        self.$elem.style.top = self.y + "px";
        self.$elem.style.left = self.x + "px";
        self.$elem.style.background = "yellow";
        self.$elem.style.position = 'absolute';
    
    };
    
    
    
    this.init = function (){
        this.$elem.className ="box";
        this.$elem.width = this.width;
        this.$elem.height = this.height;
        
        this.$parent.appendChild(this.$elem);
        plotPosition();

        
    };
    
    
    this.updatePosition = function() {

    this.x += this.dx;

    this.y += this.dy;

  };
    
     this.plot = function(){
         console.log('plot called');
         plotPosition();
     }
    
};


var box1 = new Ballclass({
    x:10,
    y:10,
    dx:1,
    dy:1,
    $parent : $container
});

box1.init();

var box2 = new Ballclass({
    x:20,
    y:50,
    dx:1,
    dy:1,
    $parent : $container
});

box2.init();

setInterval(function(){
      box1.updatePosition();
      box1.plot();
      box2.updatePosition();
      box2.plot();
    
    
},100);


//
// 
//function Box(props) {
//
//  this.x = props.x;
//
//  this.y = props.y;
//
//  this.$parent = props.$parent;
//
//  this.height =
//
//    (Box.MAX_HEIGHT > props.height ? Box.MAX_HEIGHT : props.h) || 50;
//
//  this.width = props.width || 50;
//
//  this.dx = props.dx || 1;
//
//  this.dy = props.dy || 1;
//
//
//
//  var self = this;
//
//
//
//  this.$elem = document.createElement("div");
//  
//
//  var plotPosition = function() {
//
//    console.log("PLOTPOSITION IS CALLED:");
//      console.log(self$elem)
//    self.$elem.style.top = self.y + "px";
//
//    self.$elem.style.left = self.x + "px";
//    self.$elem.style.background = 'red';
//    self.$elem.style.position = 'absolute';
//
//  };
//
//
//
//  this.init = function() {
//
//    console.log("INIT IS CALLED", this);
//
//    this.$elem.className = "box";
//
//    this.$elem.width = this.width;
//
//    this.$elem.height = this.height;
//
//    plotPosition();
//
//    this.$parent.appendChild(this.$elem);
//
//  };
//
//
//
//  this.plot = function() {
//    plotPosition();
//
//  };
//
//
//
//  this.updatePosition = function() {
//
//    this.x += this.dx;
//
//    this.y += this.dy;
//
//  };
//
//}
//
//Box.MAX_HEIGHT = 200;
//
//Box.someClassFunction = function() {
//
//  alert("BOOM");
//
//};


//
//var box1 = new Box({
//
//  x: 10,
//
//  y: 20,
//
//  $parent: $container
//
//});
//
//box1.init();

//console.log(box1);
//
//
//
//var box2 = new Box({
//
//  x: 500,
//
//  y: 100,
//
//  height: 500,
//
//  width: 100,
//
//  $parent: $container
//
//});
//
//box2.init();
//
//
//
// setInterval(function() {
//
//   box1.updatePosition();
//
//   box1.plot();
//
//   box2.updatePosition();
//
//   box2.plot();
//
// }, 100);
//
//
//
//console.log(box2);



// 1. Instance variable

// 2. Constructor

// 3. Instance method

// 4. Public method

// 5. Private method

// 6. Class variable

// 7. Class method

// 8. Association