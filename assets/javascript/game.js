$( document ).ready(function() {

// at the start of the game, there's a randomly generated number that
// appears in the computerGeneratedNumber div- it will be a number between 19-120

var wins = 0;
var losses = 0;
// variables for the computer generated number
var minNumberComputer = 19;
var maxNumberComputer = 120;
// setting the variables for the first jewel value
var minNumberJewel = 1;
var maxNumberJewel = 12;

// function to create the random number to be used throughout game
function randomNumber(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}
var jewelOne;
var jewelTwo;
var jewelThree;
var jewelFour;
var targetNumber;
// totalScore variable will contain the sum of the jewels added together
var totalScore;
var $totalScore = $('#totalScore')
var $message = $('#message');
var $numLosses = $('#numLosses');
var $numWins = $('#numWins');
var $computerGeneratedNumber = $('#computerGeneratedNumber');
var message = ""
//  Win occurs when totalScore = computerGeneratedNumber. 
// If there is a win, the 'message' div updates to read "You win!" and 
// the 'numWins' div increments up 1

// function to produce the random computer number
function writeTargetNumber() { 
    $computerGeneratedNumber.html(targetNumber);
}

function writeMessage (){
	$message.html(message);
}
// calling that function 
function writeNumLosses (){
	$numLosses.html(losses);
}

function writeNumWins() {
	$numWins.html(wins);
}

function writeTotalScore() {
	$totalScore.html(totalScore);
}

// (jewelOne, jewelTwo, jewelThree, jewelFour) represent a random value b/w 1-12, but the value is not displayed
// which is reset to a new random value at the start of the game, but stays
 // the same during the game
function write() {
	writeTargetNumber();
	writeMessage ();
	writeNumLosses ();
	writeNumWins();
	writeTotalScore();
}

function addToTotal(addedScore) {
	totalScore = totalScore + addedScore;
	checkWin();
}

function checkWin() {
	// if totalScore is targetNumber, user wins
	if (totalScore===targetNumber) {
		wins++;
		reset();
	} else if (totalScore>targetNumber) {
		losses++;
		reset();
	} else {
		write();
	}
	// else if totalScore greater than targetNumber, user loses

}
// setting variables equal to the randomNumberFromRange
function reset(){
	jewelOne = randomNumber(minNumberJewel, maxNumberJewel);
	jewelTwo = randomNumber(minNumberJewel, maxNumberJewel);
	jewelThree = randomNumber(minNumberJewel, maxNumberJewel);
	jewelFour = randomNumber(minNumberJewel, maxNumberJewel);
	targetNumber = randomNumber(minNumberComputer, maxNumberComputer);
// totalScore variable will contain the sum of the jewels added together
	totalScore = 0;
	console.log('resetting game');
	write();
}


// each time a jewelbutton is clicked, the value assigned 
// to that jewel is added to the total contained in the totalScore div. Every click
// adds more points.






// 	$('#message').html();
function tallyResults(){
	if (totalScore<targetNumber) {
	    $('#message').html("Win or Lose?");
	} else if (totalScore>targetNumber) {
		// block of code to be executed if the condition1 is false and condition2 is true
		losses++;
		$('#message').html("You Lose!");
		$('#numLosses').html(losses);
		console.log('#numLosses');
	} else {
	    // block of code to be executed if the condition1 is false and condition2 is false
	    wins++;
		$('#message').html('You Win!');
		$('#numWins').html(wins);
		console.log('#numWins');
	}	
}



// If totalScore > computerGeneratedNumber, player loses.
// else, the 'message' div updates to read "You Lose!" 
// and the numLosses' div increments up 1

// game resets. computerGeneratedNumber is randomly assigned a new number, and each
// jewel has a new value, and totalScore 
 



    $("#jewelOne").on("click", function (){
		addToTotal(jewelOne);

    });

    $("#jewelTwo").on("click", function (){
		addToTotal(jewelTwo);
	});

    $("#jewelThree").on("click", function (){
		addToTotal(jewelThree);
	});

   $("#jewelFour").on("click", function (){
   		addToTotal(jewelFour);
	});
   reset();
});


