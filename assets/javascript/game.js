

// at the start of the game, there's a randomly generated number that
// appears in the computerGeneratedNumber div- it will be a number between 19-120

// variables for the computer generated number
var minNumberComputer = 19;
var maxNumberComputer = 120;

// function to produce the random computer number
function randomNumberFromRangeComputer(min, max)
{
    var randomNumberComputer = Math.floor(Math.random()*(max-min+1)+min);
    console.log(randomNumberComputer);
    document.getElementById('computerGeneratedNumber').innerHTML = randomNumberComputer;
}

// calling that function 
randomNumberFromRangeComputer(minNumberComputer, maxNumberComputer);

// (jewelOne, jewelTwo, jewelThree, jewelFour) represent a random value b/w 1-12, but the value is not displayed
// which is reset to a new random value at the start of the game, but stays
 // the same during the game

// setting the variables for the first jewel value
var minNumberJewel = 1;
var maxNumberJewel = 12;

// function to create the random number to be used throughout game
function randomNumberFromRangejewel(min, max) {
	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
	return randomNumber;
  	console.log(randomNumber);
}

// setting variables equal to the randomNumberFromRange

var jewelOne = randomNumberFromRangejewel(minNumberJewel, maxNumberJewel);
console.log(jewelOne);
var jewelTwo = randomNumberFromRangejewel(minNumberJewel, maxNumberJewel);
console.log(jewelTwo);
var jewelThree = randomNumberFromRangejewel(minNumberJewel, maxNumberJewel);
console.log(jewelThree);
var jewelFour = randomNumberFromRangejewel(minNumberJewel, maxNumberJewel);
console.log(jewelFour);

// each time a jewelbutton is clicked, the value assigned 
// to that jewel is added to the total contained in the totalScore div. Every click
// adds more points. 
function addToTotalScore() {
	var score= [jewelOne, jewelTwo, jewelThree, jewelFour];
	console.log(score);


}

//  Win occurs when totalScore = computerGeneratedNumber. 
// If there is a win, the 'message' div updates to read "You win!" and 
// the 'numWins' div increments up 1

// If totalScore > computerGeneratedNumber, player loses.
// else, the 'message' div updates to read "You Lose!" 
// and the numLosses' div increments up 1

// game resets. computerGeneratedNumber is randomly assigned a new number, and each
// jewel has a new value, and totalScore 
 

$( document ).ready(function() {
    console.log( "ready!" );

    $("#jewelOne").on("click", function (){
    	console.log("jewelOne");
    
		document.getElementById("totalScore").innerHTML =
		sumAll(1, 123, 500, 115, 44, 88);

    });

    $("#jewelTwo").on("click", function (){
    	console.log("jewelTwoClicked");

	});

    $("#jewelThree").on("click", function (){
    	console.log("jewelThreeClicked");
	});

   $("#jewelFour").on("click", function (){
    	console.log("jewelFourClicked");
	});

});


