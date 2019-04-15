// script.js
// clicker appCodeName

// functions go here
var clickHandler = function (event) {
	console.log("Click!");
	g = window.game;
	g.score = g.score + 1 + g.interns;
	//$("#score").text(g.score);
	//console.log(window.game.score);
}; 

var hireInterns = function (event) {
	console.log("Buy Some Interns!");
	g = window.game;
	// interns cost 10 to start
	// each one after that costs double
	
	if (g.score >= g.internCost) {
		g.score = g.score - g.internCost;
		g.interns = g.interns + 1;
		g.internCost = g.internCost * 1.1;
		//$("#score"). text(g.score);
	}
	console.log("Interns = " + g.interns);
	console.log("Cost per intern = " + g.internCost);
	$("#interns").text(g.interns);
	$("#internCost").text(g.internCost.toFixed(2));
	//$("#score").text(g.score);

};

var buyBotFarms = function (event) {
	// first bot farm is 100
	// each increase by 1.2x after that
	
	g = window.game;
	
	if (g.score >= g.botFarmCost) {
		g.score = g.score - g.botFarmCost;
		g.botFarms = g.botFarms + 1;
		g.botFarmCost = g.botFarmCost * 1.2;
		//$("#score"). text(g.score);	
	};
	$("#botFarms").text(g.botFarms);
	$("#botFarmCost").text(g.botFarmCost.toFixed(2));
};

var updateScore = function (event) {
	g = window.game;
	console.log(g.score);
	
	// Every second, bot farms click for you
	// (which also means you get intern clicks)
	// left alone, the interns get 10 cents each
	
	clicksPerSecond  = g.botFarms * g.interns;
	clicksPerSecond += g.interns * 0.10; // 10 cents per intern
	clicksPerFrame = clicksPerSecond / 50;
	
	g.score = g.score + (clicksPerFrame);
	$("#score").text(g.score.toFixed(2)); //dollars and cents
}
//main program here

//create game object
this.game = {
	name: "Clicker Game",
	score: 0,
	interns: 0,
	internCost: 10,
	botFarms: 0,
	botFarmCost: 100,
};

//Set starting score
//this.game.score = 0;
$("#score").text(this.game.score);

//set autoclickers
$("#interns").text(this.game.interns);

//set bot farms
$("#botFarms").text(this.game.botFarms);

// set the click handler
$("#clickme").click(clickHandler);
$("#hireInterns").click(hireInterns);
$("#buyBotFarms").click(buyBotFarms);

setInterval(updateScore, 50);