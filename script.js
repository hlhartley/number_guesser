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
  var randomNumberGenerator = Math.floor(Math.random() * (parseInt(maxValue.innerText) - parseInt(minValue.innerText) + 1)) + parseInt(minValue.innerText); 
  return randomNumberGenerator;
}

// Guess, clear, and reset buttons
var challengerOneGuess = document.querySelector('#challenger1-guess');
var challengerTwoGuess = document.querySelector('#challenger2-guess');
var submitGuessButton = document.querySelector('#submitguessbutton');
var challenger1GuessResult = document.querySelector('.challenger1-guess-result');
var challenger2GuessResult = document.querySelector('.challenger2-guess-result');
var makeActiveClearButton = document.querySelector('.disabled');
var makeActiveResetButton = document.querySelectorAll('.disabled')[1];
var showResultCommentC1 = document.querySelector('#result-comment-c1'); 
var showResultCommentC2 = document.querySelector('#result-comment-c2'); 
  submitGuessButton.addEventListener('click', function() {
    challenger1GuessResult.innerText = challengerOneGuess.value;
    challenger2GuessResult.innerText = challengerTwoGuess.value;
    makeActiveClearButton.classList.remove('disabled');
    makeActiveClearButton.classList.add('button:hover');
    makeActiveResetButton.classList.remove('disabled');
    makeActiveResetButton.classList.add('button:hover');
  });

var clearInput = document.querySelector('#clearbutton');
clearInput.addEventListener('click', function(){
  challengerOneGuess.value = "";
});

var resetGame = document.querySelector('#resetbutton');
resetGame.addEventListener('click', function(){
  minRange.value = "";
  maxRange.value = "";
  challengerOneGuess.value = "";
  minValue.innerText = "";
  maxValue.innerText = "";
  lightPinkFont.innerText = "";
  clearInput.classList.add('disabled');
  resetGame.classList.add('disabled');
  guessErrorMessage.classList.add('display-none')
  minRangeError.classList.add('display-none')
  maxRangeError.classList.add('display-none')
  showResultCommentC1.innerText = "";
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
  if (challengerOneGuess.value === "") {
    guessErrorMessage.classList.remove('display-none') 
  } else {
    guessErrorMessage.innerText = "";
  }
}
submitGuessButton.addEventListener('click', inputGuess);

var highGuessErrorMessage = document.querySelector('#high-guess-error-message');
function guessOutsideMaxRange() {
  if (challengerOneGuess.value > parseInt(maxValue.innerText)) {
    highGuessErrorMessage.classList.remove('display-none')
  } else {
    highGuessErrorMessage.innerText = "";
  }
}
submitGuessButton.addEventListener('click', guessOutsideMaxRange)

var lowGuessErrorMessage = document.querySelector('#low-guess-error-message');
function guessOutsideMinRange() {
  if (challengerOneGuess.value < parseInt(minValue.innerText)) {
    lowGuessErrorMessage.classList.remove('display-none')
  } else {
    lowGuessErrorMessage.innerText = "";
  }
}
submitGuessButton.addEventListener('click', guessOutsideMinRange)

// Guess results and feedback
function resultMessageC1() {
  if (parseInt(challengerOneGuess.value) === newRandomNumber) {
  showResultCommentC1.innerText = "BOOM!";
  } else if (parseInt(challengerOneGuess.value) < newRandomNumber) {
  showResultCommentC1.innerText = "Sorry, that is too low";
  } else if (parseInt(challengerOneGuess.value) > newRandomNumber) {
  showResultCommentC1.innerText = "Sorry, that is too high";
  };
}
submitGuessButton.addEventListener('click', resultMessageC1);

function resultMessageC2() {
  if (parseInt(challengerTwoGuess.value) === newRandomNumber) {
  showResultCommentC2.innerText = "BOOM!";
  } else if (parseInt(challengerTwoGuess.value) < newRandomNumber) {
  showResultCommentC2.innerText = "Sorry, that is too low";
  } else if (parseInt(challengerTwoGuess.value) > newRandomNumber) {
  showResultCommentC2.innerText = "Sorry, that is too high";
  };
}
submitGuessButton.addEventListener('click', resultMessageC2);

// Backup for if guess is NaN
var numberErrorMessage = document.querySelector('#number-error-message');
function inputGuessNumber() {
  if (isNaN(parseInt(challengerOneGuess.value))) {
  numberErrorMessage.classList.remove('display-none');
  };
}
submitGuessButton.addEventListener('click', inputGuessNumber);
