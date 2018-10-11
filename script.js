// Min and max buttons
var minRange = document.querySelector('#minrange');
var updateButton = document.querySelector('.update');
var minValue = document.querySelector('#minvalue');
var maxRange = document.querySelector('#maxrange');
var maxValue = document.querySelector('#maxvalue')

updateButton.addEventListener('click', function() {
  minValue.innerText = minRange.value;
  maxValue.innerText = maxRange.value;
// sets random number to new random number based on max range
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
  guessErrorMessage.classList.add('display-none')
  minRangeError.classList.add('display-none')
  maxRangeError.classList.add('display-none')
  showResultComment.innerText = "";
  newRandomNumber;
});

// Error messages
function minMaxRange() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
  alert("Min range value must be lower than max range value")
  };
} 
updateButton.addEventListener('click', minMaxRange);


var minRangeError = document.querySelector('#min-range-error');
function enterMinRange() {
  if (minRange.value === "") {
    minRangeError.classList.remove('display-none') 
  } else {
    minRangeError.innerText = "";
  };
}
updateButton.addEventListener('click', enterMinRange);

var maxRangeError = document.querySelector('#max-range-error');
function enterMaxRange() {
  if (maxRange.value === "") {
    maxRangeError.classList.remove('display-none')
  } else {
    maxRangeError.innerText = "";
    };
  }
  updateButton.addEventListener('click', enterMaxRange);


var guessErrorMessage = document.querySelector('#guess-error-message');
function inputGuess() {
  if (guess.value === "") {
    guessErrorMessage.classList.remove('display-none') 
  } else {
    guessErrorMessage.innerText = "";
  }
}
submitGuessButton.addEventListener('click', inputGuess);

function guessOutsideMaxRange() {
  if (guess.value > parseInt(maxRange.value)) {
    errorMessage.innerText = "Your guess must be lower than the max range value"
  };
}
submitGuessButton.addEventListener('click', guessOutsideMaxRange)

// function inputGuessNumber() {
//   if (parseInt(guess.value === NaN)) {
//     errorMessage.innerText = "Your guess must be an integer number"
//   };
// }
// submitGuessButton.addEventListener('click', inputGuessNumber);

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
submitGuessButton.addEventListener('click', resultMessage);
