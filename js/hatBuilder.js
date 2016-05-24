// <script>

function window.onload() {
  var canvas = document.getElementById('hatcanvas');
  var context = canvas.getContext('2d');
  var img = document.getElementById('hat');
  context.drawImage(img, 10, 10);
}


// </script>



// function loadCanvas(dataURL) {
//   var hatImage = new Image();
//   hatImage.onload = function() {
//     context.drawImage(this, 0, 0);
//   };
//   hatImage.src = 'images/hat_outline.png';
// }
// loadCanvas();



// var canvas = document.getElementById('hatcanvas');
// var context = canvas.getContext('2d');

// var img = new Image();
// img.src = 'images/hat_outline.png';

// drawImage(img, 0, 0);





