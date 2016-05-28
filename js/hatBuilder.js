// var canvas = document.getElementById('hatcanvas');
// var context = canvas.getContext('2d');

var image = new Image(); //create a new Image DOM variable and assign it to a variable
image.src = 'images/download.png'; //load up image by setting the src attribute of the image to the correct path
image.onload = function() {
  context.drawImage(image, 0, 0, 400, 200); //context.drawImage(img, sourcex, sy, sw, sh, destinationx, dy, dw, dh);
}

// document.getElementById('hat').addEventListener('click', function(e) {
// 		var img = document.createElement('img');
// 		img.setAttribute('src', 'images/bobble_blue.png');
// 		e.target.appendChild(img);
// 	});
// }

