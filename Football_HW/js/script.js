$('.ball').on('click', function () {
	$('.ball').removeClass('rotate360');
	hitBall();
});

let footballField = $('.ball').parent();
let fieldMin = 0;
let fieldMax = footballField.height() - 120;
let fieldWidth = Math.floor(footballField.width()) - 120;


function hitBall () {

	let position = $('.ball').position();
	let top;
	let left = Math.round(position.left);
	let topBall = topPos(fieldMin, fieldMax);
	let leftBall = leftPos(left);


	$('.ball').animate(
		{
			left: leftBall, 
			top: topBall,

		}, 
		1000, 
		() => {
			position = $('.ball').position();
			top = Math.round(position.top);
			if (top < (footballField.height() / 2) + 25 )
			{
				if (top > (footballField.height() / 2) - 95 ) {
					alert("GOAL!!!");
				}
			}
		}
	);
	
	$('.ball').addClass('rotate360');
	
};

function topPos (min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function leftPos (pos) {
	
	if (pos === fieldWidth) {
		pos = 0;
	}
	else {
		pos = fieldWidth;
	}

	return pos;
}