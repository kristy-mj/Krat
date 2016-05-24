// var canvas = document.getElementById('hatcanvas');
// var context = canvas.getContext('2d');


var canvas = document.getElementById('hatcanvas');
var context = canvas.getContext('2d');

make_base();

function make_base() {
  base_image = new Image();
  base_image.src = 'images/hatbuilder_sketch.png';

  base_image.onload = function(10, 10){
    context.drawImage(base_image, 10, 10);
  }
}
