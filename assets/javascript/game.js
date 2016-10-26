// A page can't be manipulated safely until the document is "ready." 
// jQuery detects this with a document.ready function 

$( document ).ready(function() {
    console.log( "ready!" );

// at the start of the game, there's a randomly generated number that
// appears in the computerGeneratedNumber div- it will be a number between 19-120

var minNumberComputer = 19;
var maxNumberComputer = 120;

randomNumberFromRangeComputer(minNumberComputer, maxNumberComputer);

function randomNumberFromRangeComputer(min, max)
{
    var randomNumberComputer = Math.floor(Math.random()*(max-min+1)+min);
    console.log(randomNumberComputer);
    document.getElementById('computerGeneratedNumber').innerHTML = randomNumberComputer;
}

// four crystal button divs(jewelOne, jewelTwo, jewelThree, jewelFour) 
// each represent a random value b/w 1-12, but the value is not displayed
// which is reset to a new random value at the start of the game, but stays
 // the same during the game

var minNumberJewel = 1;
var maxNumberJewel = 12;

randomNumberFromRangejewelOne(minNumberJewel, maxNumberJewel);

function randomNumberFromRangejewelOne(min, max) {
	var randomNumberJewelOne = Math.floor(Math.random()*(max-min+1)+min);
    console.log(randomNumberJewelOne);
    document.getElementById('totalScore').innerHTML = randomNumberJewelOne;
}

// each time one of the jewelbutton is clicked, the value assigned 
// to that jewel is added to the total contained in the totalScore div. Every click
// adds more points. 

//  Win occurs when totalScore = computerGeneratedNumber. 
// If there is a win, the 'message' div updates to read "You win!" and 
// the 'numWins' div increments up 1

// If totalScore > computerGeneratedNumber, player loses.
// else, the 'message' div updates to read "You Lose!" 
// and the numLosses' div increments up 1

// game resets. computerGeneratedNumber is randomly assigned a new number, and each
// jewel has a new value, and totalScore 


});


