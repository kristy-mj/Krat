var image;

$('#bobble-btn').click(function() {
	image = document.getElementById('bobble');
	image.src = 'images/bobble/bobble_dgrey.png';
	$('#colors').click(function() {
	var color = $('.swatch.active').css('backgroundColor');
	switch (color) {
		case 'rgb(77, 77, 77)':
			image.src = 'images/bobble/bobble_dgrey.png';
			break
		case 'rgb(204, 204, 204)':
			image.src = 'images/bobble/bobble_lgrey.png';
			break
	    case 'rgb(217, 224, 33)':
		    image.src = 'images/bobble/bobble_lime.png';
			break
		case 'rgb(0, 255, 255)':
			image.src = 'images/bobble/bobble_cyan.png';
			break
		case 'rgb(224, 0, 135)':
			image.src = 'images/bobble/bobble_pink.png';
			break
		case 'rgb(232, 130, 0)':
			image.src = 'images/bobble/bobble_orange.png';
			break
		case 'rgb(64, 91, 3)':
			image.src = 'images/bobble/bobble_green.png';
			break
		case 'rgb(100, 40, 200)':
			image.src = 'images/bobble/bobble_purple.png';
			break
		}
	});
});

$('#body-btn').click(function() {
	image = document.getElementById('body');
	image.src = 'images/body/body_dgrey.png';
	$('#colors').click(function() {
	var color = $('.swatch.active').css('backgroundColor');
	switch (color) {
		case 'rgb(77, 77, 77)':
			image.src = 'images/body/body_dgrey.png';
			break
		case 'rgb(204, 204, 204)':
			image.src = 'images/body/body_lgrey.png';
			break
	    case 'rgb(217, 224, 33)':
		    image.src = 'images/body/body_lime.png';
			break
		case 'rgb(0, 255, 255)':
			image.src = 'images/body/body_cyan.png';
			break
		case 'rgb(224, 0, 135)':
			image.src = 'images/body/body_pink.png';
			break
		case 'rgb(232, 130, 0)':
			image.src = 'images/body/body_orange.png';
			break
		case 'rgb(64, 91, 3)':
			image.src = 'images/body/body_green.png';
			break
		case 'rgb(100, 40, 200)':
			image.src = 'images/body/body_purple.png';
			break
		}
	});
});

$('#brim-btn').click(function() {
	image = document.getElementById('brim');
	image.src = 'images/brim/brim_dgrey.png';
	$('#colors').click(function() {
	var color = $('.swatch.active').css('backgroundColor');
	switch (color) {
		case 'rgb(77, 77, 77)':
			image.src = 'images/brim/brim_dgrey.png';
			break
		case 'rgb(204, 204, 204)':
			image.src = 'images/brim/brim_lgrey.png';
			break
	    case 'rgb(217, 224, 33)':
		    image.src = 'images/brim/brim_lime.png';
			break
		case 'rgb(0, 255, 255)':
			image.src = 'images/brim/brim_cyan.png';
			break
		case 'rgb(224, 0, 135)':
			image.src = 'images/brim/brim_pink.png';
			break
		case 'rgb(232, 130, 0)':
			image.src = 'images/brim/brim_orange.png';
			break
		case 'rgb(64, 91, 3)':
			image.src = 'images/brim/brim_green.png';
			break
		case 'rgb(100, 40, 200)':
			image.src = 'images/brim/brim_purple.png';
			break
		}
	});
});




	
	

