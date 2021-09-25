
let plants = 0;

let cursorCost = 15;
let cursors = 0;

let gardenerCost = 150;
let gardeners = 0;

let fertilizerCost = 50;
let fertilizers = 0;

let clickingPower = 1;




function buyCursor() {
	if (plants >= cursorCost) {
		plants = plants - cursorCost;
		cursors = cursors + 1;
		cursorCost = Math.round(cursorCost * 1.15);

		

		document.getElementById("plants").innerHTML = plants;
		document.getElementById("cursorcost").innerHTML = cursorCost;
		document.getElementById("cursors").innerHTML = cursors;
		updateScorePerSecond();
	}
}



function buyGardener() {
	if (plants >= gardenerCost) {
		plants = plants - gardenerCost;
		gardeners = gardeners + 1;
		gardenerCost = Math.round(gardenerCost * 1.15);

		document.getElementById("plants").innerHTML = plants;
		document.getElementById("gardenercost").innerHTML = gardenerCost;
		document.getElementById("gardeners").innerHTML = gardeners;
		updateScorePerSecond();
	}
}


function buyFertilizer() {
	if (plants >= fertilizerCost) {
		plants = plants - fertilizerCost;
		fertilizers = fertilizers + 1;
		fertilizerCost = Math.round(fertilizerCost * 1.15);

		document.getElementById("plants").innerHTML = plants;
		document.getElementById("fertilizercost").innerHTML = fertilizerCost;
		document.getElementById("fertilizers").innerHTML = fertilizers;
		updateScorePerSecond();
	}
}


document.getElementById("btn").onclick = function () {
	plants += clickingPower;

	
	document.getElementById("plants").innerHTML = plants;
}



function updateScorePerSecond() {
	scorePerSecond = cursors + (fertilizers * 5) + (gardeners * 13);
	document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

/*
function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (typeof savedGame.score !== "undefined") {
		plants = savedGame.plants; 
	}
	if (typeof savedGame.score !== "undefined") {
		clickingPower = savedGame.clickingPower;
	}
	if (typeof savedGame.score !== "undefined") { 
		cursorCost = savedGame.cursorCost;
	}
	if (typeof savedGame.score !== "undefined") {
		cursors = savedGame.cursors;
	}
	if (typeof savedGame.score !== "undefined") {
		gardenerCost = savedGame.gardenerCost;
	}
	if (typeof savedGame.score !== "undefined") {
		gardeners = savedGame.gardeners;
	}
	if (typeof savedGame.score !== "undefined") {
		fertilizerCost = savedGame.fertilizerCost;
	}
	if (typeof savedGame.score !== "undefined") {
		fertilizers = savedGame.fertilizers;
	}
}

window.onload = function() {
	loadGame();
	updateScorePerSecond();
};


function saveGame() {
	var gameSave = {
		plants: plants,
		clickingPower: clickingPower,
		cursorCost: cursorCost,
		cursors: cursors,
		gardenerCost: gardenerCost,
		gardeners: gardeners,
		fertilizerCost: fertilizerCost,
		fertilizers: fertilizers
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

*/

setInterval(function() {
	plants = plants + cursors;
	plants = plants + fertilizers * 5;
	plants = plants + gardeners * 13;
	document.getElementById("plants").innerHTML = plants;


	document.title = plants + " plants - Plant Clicker";
}, 1000);

/*
setInterval(function() {
	saveGame();
}, 30000);
*/

