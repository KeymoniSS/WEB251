// script.js
// clicker appCodeName

// functions go here
var clickHandler = function (event) {
	console.log("Click!");
	g = window.game;
	g.score = g.score + 1 + g.interns;
	$("#score").text(g.score);
	//console.log(window.game.score);
}; 

var hireInterns = function (event) {
	console.log("Buy Some Interns!");
	g = window.game;
	// interns cost $$$
	internCost = 10 + g.interns;
	if (g.score >= internCost) {
		g.score = g.score - internCost;
		g.interns = g.interns + 1;
	}
	//g.interns = g.interns + 1;
	//g.score = g.score - 1;
	$("#interns").text(g.interns)
	$("#score").text(g.score);
	//console.log("Interns = " + g.interns);
};
//main program here

//create game object
this.game = {
	name: "Clicker Game",
	score: 0,
	interns: 0,
};

//Set starting score
//this.game.score = 0;
$("#score").text(this.game.score);

//set autoclickers
$("#interns").text(this.game.interns);

// set the click handler
$("#clickme").click(clickHandler);

// set the click handler
$("#hireInterns").click(hireInterns);