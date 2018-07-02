var $imageSlider = document.getElementsByClassName('image-slider')[0];
var $hero = document.getElementById('avatar');

var stopBackground = false;

var maxWidth = -1536;
var imageSize = 768;
var marginValue = 0;

function startBackground() {

  var imageSlider = setInterval(function() {

    if (stopBackground) {
      clearInterval(imageSlider);
    } else {
      if (marginValue === maxWidth) {
        console.log('did you notice? image just changed!');
        marginValue = 0;
        $imageSlider.style.marginLeft = marginValue + "px";
      } else {
        marginValue -= 1;
        $imageSlider.style.marginLeft = marginValue + "px";
      }
    }
  }, 20);
}
