function setBobbleColor() {
	var image = document.getElementById('bobble');
	image.src = 'images/bobble_load.png';
	return true;
}

function getColor() { 
    var color = $('.swatch.active').css('backgroundColor');
    // console.log (color);
    return color;
}

	// if (color == 'rgb(217, 224, 33)' {
	//     	console.log 'cyan';
	// }
// }

// function changeColor () {
// 	if (setBobbleColor == true && getColor == 'cyan') {
// 	// img.src = 'images/bobble_cyan.png'
// 	console.log ('yay');
// }


// 		document.getElementsByClassName('swatch active') == swatch.style.backgroundColor){
// 	console.log ('Hi');
// 	}
// }


 // switch ('color') {
	// 	case'rgb(217, 224, 33)':
	// 		image.src = 'images/bobble_lime.png';
	// 		break;
	// 	case 'rgb(0 255 255)':
	// 		image.src = 'images/bobble_cyan.png';
	// 		break;
	// }


// 1. Brim
// 2. Body
// 3. Bobble

// onClick event - identify if 1, 2 or 3 has been clicked

// onClick of 1: (Show colour options)
// If 1 has been clicked && colour A has been clicked {
// change image1 to image1A.
// If 1 has been clicked && colour B has been clicked {
// change image1 to image1B.

// onClick of 2:
// If 2 has been clicked && colour A has been clicked {
// change image2 to image2A.
// If 2 has been clicked && colour B has been clicked {
// change image2 to image2B.

// Hide all images apart from Image1A, 2A, 3A (see js racer button)