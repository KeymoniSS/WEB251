// script.js
// clicker appCodeName

// functions go here


//main program here


var newHeadingText = prompt("new heading:");
$("#main-heading").text(newHeadingText);

$("#score").text(100);

var timeUp = function () {
	//$("h1").fadeOut(3000);.fadeIn(3000);
    //$("h1").slideDown(3000);
	$("h1").text("Time's Up!").slideUp(1500).slideDown(1500);
};
setTimeout(timeUp, 1000);

var score = 0;
var fps = 30;
var scoreUp = function () {
	score = score + 1;
	$("#score").text(score).fadeOut(10).fadeIn(10);
	// wait 1 sec for next frame
	if (score < 10000) {
	setTimeout(scoreUp, 1000/fps);
	}
};

// stat timer
scoreUp();




/* var score = 0;
while (true) {
	score++;
	$("#score").text(score); */