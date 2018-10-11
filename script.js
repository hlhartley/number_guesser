// Min and max buttons
var minRange = document.querySelector('#minrange');
var updateButton = document.querySelector('.update');
var minValue = document.querySelector('#minvalue');
var maxRange = document.querySelector('#maxrange');
var maxValue = document.querySelector('#maxvalue')

updateButton.addEventListener('click', function() {
  minValue.innerText = minRange.value;
  maxValue.innerText = maxRange.value;
// Sets random number to new random number based on max range
  newRandomNumber = randomNumberFunction();
  console.log(newRandomNumber);
});

function randomNumberFunction() {
  return Math.floor(Math.random() * parseInt(maxValue.innerText) + 1); 
}

// *Random number variable (initializes #1-100)
var newRandomNumber = randomNumberFunction();

// Guess, clear, and reset buttons
var guess = document.querySelector('#guess');
var submitGuessButton = document.querySelector('#submitguessbutton');
var lightPinkFont = document.querySelector('.light-pink-font')
var makeActiveClearButton = document.querySelector('.disabled');
var makeActiveResetButton = document.querySelectorAll('.disabled')[1];
var showResultComment = document.querySelector('#result-comment');  
  submitGuessButton.addEventListener('click', function() {
    lightPinkFont.innerText = guess.value;
    makeActiveClearButton.classList.remove('disabled');
    makeActiveClearButton.classList.add('button:hover');
    makeActiveResetButton.classList.remove('disabled');
    makeActiveResetButton.classList.add('button:hover');
  });

var clearInput = document.querySelector('#clearbutton');
clearInput.addEventListener('click', function(){
  guess.value = "";
});

var resetGame = document.querySelector('#resetbutton');
resetGame.addEventListener('click', function(){
  minRange.value = "";
  maxRange.value = "";
  guess.value = "";
  minValue.innerText = "";
  maxValue.innerText = "";
  lightPinkFont.innerText = "";
  clearInput.classList.add('disabled');
  resetGame.classList.add('disabled');
  showResultComment.innerText = "";
  // ***generate new random number
});

// Error messages
function minMaxRange() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
  alert("Min range value must be lower than max range value")
  };
} 
minMaxRange();
updateButton.addEventListener('click', minMaxRange);

function enterMaxRange() {
  if (maxRange.value === "") {
  alert("Enter a max range")
  };
}
enterMaxRange();
updateButton.addEventListener('click', enterMaxRange);

function enterMinRange() {
  if (minRange.value === "") {
  alert("Enter a min range")
  };
}
enterMinRange();
updateButton.addEventListener('click', enterMinRange);

// function noMinMaxValue() {
//   if (parseInt(minRange.value) === "" || parseInt(maxRange.value) === "") {
//   alert("Input min / max value")
//   };
// }
// noMinMaxValue();
// updateButton.addEventListener('click', noMinMaxValue);

// function inputGuess {
//   if (guess.value = "") {
//   alert("Input guess")
//   };
// }
// inputGuess();
// submitGuessButton.addEventListener('click', inputGuess);

  // Guess results and feedback
function resultMessage() {
  if (parseInt(guess.value) === newRandomNumber) {
  showResultComment.innerText = "BOOM!";
  } else if (parseInt(guess.value) < newRandomNumber) {
  showResultComment.innerText = "Sorry, that is too low";
  } else if (parseInt(guess.value) > newRandomNumber) {
  showResultComment.innerText = "Sorry, that is too high";
  };
}
  resultMessage();
  submitGuessButton.addEventListener('click', resultMessage);

// if (guess.value === NaN) {
//   alert("Guess must be an interger number")
// };

// if (guess.value < minRange.value || guess.value > maxRange.value) {
//   alert("Number must be within min and max range")
// };
