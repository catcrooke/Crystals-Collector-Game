// A page can't be manipulated safely until the document is "ready." 
// jQuery detects this state of readiness for you. To do this,
// a document.ready function is needed.

$( document ).ready(function() {
    console.log( "ready!" );

// at the start of the game, there's a randomly generated number that
// appears in the computerGeneratedNumber div- it will be a number between 19-120

var minNumberComputer = 19;
var maxNumberComputer = 120;

randomNumberFromRangeComputer(minNumberComputer, maxNumberComputer);

function randomNumberFromRangeComputer(min,max)
{
    var randomNumberComputer = Math.floor(Math.random()*(max-min+1)+min);
    console.log(randomNumberComputer);
}

// four crystal button divs(jewelOne, jewelTwo, jewelThree, jewelFour) 
// each represent a randomly generated number value of the crystal button 
// that is generated at the start of the game-assigned a number between [1-12]

// each time one of a jewelbutton is clicked, the value assigned 
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


