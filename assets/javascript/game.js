// initializes the javascript document
$( document ).ready(function() {

// set the initial wins and losses equal to zero
var wins = 0;
var losses = 0;

// set variables for the computer generated number max and min
var minNumberComputer = 19;
var maxNumberComputer = 120;

// setting the jewel value max and min
var minNumberJewel = 1;
var maxNumberJewel = 12;

// function that generates all of the randomized numbers needed for the game
function randomNumber(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

// declare the primary variables 
var jewelOne;
var jewelTwo;
var jewelThree;
var jewelFour;
var targetNumber;
var totalScore;
var $totalScore = $('#totalScore')
var $message = $('#message');
var $numLosses = $('#numLosses');
var $numWins = $('#numWins');
var $computerGeneratedNumber = $('#computerGeneratedNumber');
var message = "Click on a Gem to Begin!"

// function that writes the targetNumber
function writeTargetNumber() { 
// updating the contents of the computerGeneratedNumber div
    $computerGeneratedNumber.html(targetNumber);
}

// writes the win or lose message 
function writeMessage (){
// updates the contents of the message div
	$message.html(message);
}

// writes the total number of losses
function writeNumLosses (){
// updates the contents of the losses div
	$numLosses.html(losses);
}

// writes the total number of wins
function writeNumWins() {
// updates the contents of the wins div
	$numWins.html(wins);
}

// writes the totalScore
function writeTotalScore() {
// updates the contents of the totalScore div
	$totalScore.html(totalScore);
}

// this function calls all of those previously defined write functions 
function write() {
// calls the write target number function
	writeTargetNumber();
// calls the write message function
	writeMessage();
// calls the number of losses function
	writeNumLosses();
// calls the number of wins function
	writeNumWins();
// calls the total score function
	writeTotalScore();
}

// this function takes the total score variable and adds the values associated 
// with each jewel and at each click checks it to see if the player has
// won or lost
function addToTotal(addedScore) {
// adds the value of the addedScore function 
	totalScore = totalScore + addedScore;
	checkWin();
}

// this function gives behavior to produce based on the relationship of the
// targetNumber to the totalScore
function checkWin() {
// if totalScore is targetNumber, user wins
	if (totalScore===targetNumber) {
// wins increment by 1
		wins++;
// changes the message variable to indicate a win
		message='You Win!';
// game resets by calling the game reset function
		reset();
// if the user loses by scoring greater than the targetNumber
	} else if (totalScore>targetNumber) {
// losses increment by 1 
		losses++;
// changes the losses variable to indicate a loss
		message='You Lose!';
// the game resets
		reset();
	} else {
		message='Keep Clicking Crystals!'
		write();
	}	
}

// this function restarts the game by resetting all of the variables and
// then writes those variables to the page
function reset(){
	jewelOne = randomNumber(minNumberJewel, maxNumberJewel);
	jewelTwo = randomNumber(minNumberJewel, maxNumberJewel);
	jewelThree = randomNumber(minNumberJewel, maxNumberJewel);
	jewelFour = randomNumber(minNumberJewel, maxNumberJewel);
	targetNumber = randomNumber(minNumberComputer, maxNumberComputer);
	totalScore = 0;
	console.log('resetting game');
	write();
}

// onclick event for the jewelOne button div
    $("#jewelOne").on("click", function (){
// addtoTotal function is called; 
// adds the jewelOne value to the totalScore 
		addToTotal(jewelOne);
    });

// onclick event for the jewelTwo button div
    $("#jewelTwo").on("click", function (){
// addtoTotal function is called; 
// adds the jewelTwo value to the totalScore 
		addToTotal(jewelTwo);
	});

// onclick event for the jewelThree button div
    $("#jewelThree").on("click", function (){
// addtoTotal function is called; 
// adds the jewelThree value to the totalScore 
		addToTotal(jewelThree);
	});
// onclick event for the jewelFour button div
   $("#jewelFour").on("click", function (){

// addtoTotal function is called; 
// adds the jewelThree value to the totalScore
   		addToTotal(jewelFour);
	});
// resets the game
   reset();
});


