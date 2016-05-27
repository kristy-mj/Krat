var canvas = document.getElementById('hatcanvas');
var context = canvas.getContext('2d');


var colors = ['#4D4D4D', '#CCC', '#D9E021', 'cyan', 'rgb(224, 0, 135)', 'rgb(232, 130, 0)', 'rgb(64, 91, 3)', 'rgb(100, 40, 200)'];

var swatches = document.getElementsByClassName('swatch');

for (var i = 0, n = colors.length; i<n; i++) {
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}



function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  var active = document.getElementsByClassName('active')[0];
  if (active) {
    active.className = 'swatch';
  }
}

function setSwatch (e) {
  //identify swatch
  var swatch = e.target;
  //set colour
  setColor(swatch.style.backgroundColor);
  //give colour active class
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});