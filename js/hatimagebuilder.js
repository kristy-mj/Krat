var image;

$('#bobble-btn').click(function() {
	image = document.getElementById('bobble');
	image.src = 'images/bobble/bobble_load.png';
	$('#colors').click(function() {
	var color = $('.swatch.active').css('backgroundColor');
	switch (color) {
		case 'rgb(77, 77, 77)':
			image.src = 'images/bobble/bobble_dgrey.png';
			break;
		case 'rgb(204, 204, 204)':
			image.src = 'images/bobble/bobble_lgrey.png';
	    case 'rgb(217, 224, 33)':
		    image.src = 'images/bobble/bobble_lime.png';
			break;
		case 'rgb(0, 255, 255)':
			image.src = 'images/bobble/bobble_cyan.png';
			break;
		case 'rgb(0, 255, 255,)':
			image.src = 'images/bobble/bobble_pink.png';
			break;
		case 'rgb(0, 255, 255,)':
			image.src = 'images/bobble/bobble_orange.png';
			break;
		case 'rgb(0, 255, 255,)':
			image.src = 'images/bobble/bobble_green.png';
			break;
		case 'rgb(0, 255, 255,)':
			image.src = 'images/bobble/bobble_purple.png';
			break;
		}
	});
});

$('#body-btn').click(function() {
	image = document.getElementById('body');
	image.src = 'images/body/body_load.png';
	$('#colors').click(function() {
	var color = $('.swatch.active').css('backgroundColor');
	switch (color) {
	    case 'rgb(217, 224, 33)':
		    image.src = 'images/body/body_lime.png';
			break;
		case 'rgb(0, 255, 255)':
			image.src = 'images/body/body_cyan.png';
			break;
		}
	});
});





	
	

