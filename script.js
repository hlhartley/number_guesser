// **VARIABLES**
// Buttons
var updateButton = document.querySelector('.update');
var submitGuessButton = document.querySelector('#submitguessbutton');
var resetGame = document.querySelector('#resetbutton');
var clearInput = document.querySelector('#clearbutton');
// Activate Buttons
var makeActiveClearButton = document.querySelector('.disabled');
var makeActiveResetButton = document.querySelectorAll('.disabled')[1];

// Min and Max Range Input
var minRange = document.querySelector('#minrange');
var maxRange = document.querySelector('#maxrange');

// DISPLAY Min and Max Range Output
var minValue = document.querySelector('#minvalue');
var maxValue = document.querySelector('#maxvalue')

// Variable for newRandomNumber// 
var newRandomNumber = randomNumberFunction();

// Guess Input
var challengerOneGuess = document.querySelector('#challenger1-guess');
var challengerTwoGuess = document.querySelector('#challenger2-guess');

// DISPLAY Guess Number
var challenger1GuessResult = document.querySelector('.challenger1-guess-result');
var challenger2GuessResult = document.querySelector('.challenger2-guess-result');

// Challenger Name Input
var challenger1Name = document.querySelector('#challenger1');
var challenger2Name = document.querySelector('#challenger2');

// DISPLAY Challenger Name Output
var challenger1NameResult = document.querySelector('.challenger1nameresult');
var challenger2NameResult = document.querySelector('.challenger2nameresult');

// DISPLAY Guess Result Comments
var showResultCommentC1 = document.querySelector('#result-comment-c1'); 
var showResultCommentC2 = document.querySelector('#result-comment-c2'); 

// Error-messages
var guessErrorMessage = document.querySelector('#guess-error-message');
var minRangeError = document.querySelector('#min-range-error');
var maxRangeError = document.querySelector('#max-range-error');
var lowGuessErrorMessage = document.querySelector('#low-guess-error-message');
var highGuessErrorMessage = document.querySelector('#high-guess-error-message');
// Backup for if guess is NaN
var numberErrorMessage = document.querySelector('#number-error-message');

// Var to Track Winner
var winner = '';

// Guess Counter
var guessCounter = 0;

// Time Counters
var startTime; 
var endTime;
var isFirstRound = true;

// **EVENT LISTENERS**
// Submit Guess Button 
  submitGuessButton.addEventListener('click', function() {
    challenger1NameResult.innerText = challenger1Name.value;
    challenger2NameResult.innerText = challenger2Name.value;
    challenger1GuessResult.innerText = challengerOneGuess.value;
    challenger2GuessResult.innerText = challengerTwoGuess.value;
    makeActiveClearButton.classList.remove('disabled');
    makeActiveClearButton.classList.add('button:hover');
    makeActiveResetButton.classList.remove('disabled');
    makeActiveResetButton.classList.add('button:hover');
    showResultCommentC1.classList.remove('hidden');
    showResultCommentC2.classList.remove('hidden');
    guessOutsideMinRange();
    guessOutsideMaxRange();
    guessCounter++;
    console.log(guessCounter);
    resultMessageC1();
    resultMessageC2();
    inputGuessNumber();
    decreaseMinMaxValue();
    timeFunction();
  });

  function timeFunction() {
    if (isFirstRound) {
      startTime = new Date;
      isFirstRound = false;
    }
  }

// Update Button
  updateButton.addEventListener('click', function() {
  minValue.innerText = minRange.value;
  maxValue.innerText = maxRange.value;
  newRandomNumber = randomNumberFunction();
  console.log(newRandomNumber);
  enterMinRange();
  enterMaxRange();
  minMaxRange();
});

// Clear Button
  clearInput.addEventListener('click', function(){
  challengerOneGuess.value = "";
  challengerTwoGuess.value = "";
  minRange.value = "";
  maxRange.value = "";
  guessErrorMessage.classList.add('display-none');
  minRangeError.classList.add('display-none');
  maxRangeError.classList.add('display-none');
});

// Reset Button
  resetGame.addEventListener('click', function(){
  minRange.value = "";
  maxRange.value = "";
  challengerOneGuess.value = "";
  challengerTwoGuess.value = "";
  showResultCommentC1.innerText = "";
  showResultCommentC2.innerText = "";
  minValue.innerText = "";
  maxValue.innerText = "";
  showResultCommentC1 = "";
  showResultCommentC2 = "";
  clearInput.classList.add('disabled');
  resetGame.classList.add('disabled');
  guessErrorMessage.classList.add('display-none');
  minRangeError.classList.add('display-none');
  maxRangeError.classList.add('display-none');
  newRandomNumber;
  challenger1Name.value = "";
  challenger2Name.value = ""; 
});

// **FUNCTIONS** 
// Creates Random Number Function
function randomNumberFunction() {
  var randomNumberGenerator = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value) + 1)) + parseInt(minRange.value); 
  return randomNumberGenerator;
}

// Error messages
function minMaxRange() {
  if (parseInt(maxRange.value) < parseInt(minRange.value)) {
  alert("Min range value must be lower than max range value")
  };
} 

function enterMinRange() {
  if (minRange.value === "") {
  minRangeError.classList.remove('display-none') 
  } else {
    minRangeError.innerText = "";
  };
}

function enterMaxRange() {
  if (maxRange.value === "") {
  maxRangeError.classList.remove('display-none')
  } else {
  maxRangeError.innerText = "";
  };
}

function guessOutsideMaxRange() {
  if (challengerOneGuess.value > parseInt(maxValue.innerText) || challengerTwoGuess.value > parseInt(maxValue.innerText)) {
  highGuessErrorMessage.classList.remove('display-none')
  } else {
  highGuessErrorMessage.innerText = "";
  }
}

function guessOutsideMinRange() {
  if (challengerOneGuess.value < parseInt(minValue.innerText) || challengerTwoGuess.value < parseInt(minValue.innerText)) {
    lowGuessErrorMessage.classList.remove('display-none')
  } else {
    lowGuessErrorMessage.innerText = "";
  }
}

function decreaseMinMaxValue() {
  if (parseInt(challengerOneGuess.value) === newRandomNumber) { 
    minRange.value = parseInt(minRange.value) - 10;
    maxRange.value = parseInt(maxRange.value) + 10;
  newRandomNumber;
  }
}

// Guess results and feedback for challenger 1 and 2
function resultMessageC1() {
  if (parseInt(challengerOneGuess.value) === newRandomNumber) {
  showResultCommentC1.innerText = "BOOM!";
  endTime = new Date;
  winner = challenger1NameResult.innerText;

  addWinnerCard();
  } else if (parseInt(challengerOneGuess.value) < newRandomNumber) {
  showResultCommentC1.innerText = "Sorry, that is too low";
  } else if (parseInt(challengerOneGuess.value) > newRandomNumber) {
  showResultCommentC1.innerText = "Sorry, that is too high";
  };
}

function resultMessageC2() {
  if (parseInt(challengerTwoGuess.value) === newRandomNumber) {
  showResultCommentC2.innerText = "BOOM!";
  endTime = new Date;
  addWinnerCard();
  winner = challenger2NameResult.innerText;

  // DECREASE MIN RANGE BY 10, INCREASE MAX RANGE BY 10
  // if challengerTwoGuess.value = newRandomNumber && reset button (resetGame) is clicked =>
  // minValue.innerText - 10
  // maxValue.innerText + 10

  } else if (parseInt(challengerTwoGuess.value) < newRandomNumber) {
  showResultCommentC2.innerText = "Sorry, that is too low";
  } else if (parseInt(challengerTwoGuess.value) > newRandomNumber) {
  showResultCommentC2.innerText = "Sorry, that is too high";
  };
}

// NaN Function
function inputGuessNumber() {
  if (isNaN(parseInt(challengerOneGuess.value))) {
  numberErrorMessage.classList.remove('display-none');
  };
}

// Calculate difference in time
function calculateTime() {
  var time = (endTime - startTime) / 60000;
  return time;
}

// Add Winner Cards
var rightSection = document.querySelector('.right-section');
function addWinnerCard() {
 var cardHtml =
 `<article class="right-section" onclick="removeOneCard()">
    <div class="cards">
      <b>${challenger1NameResult.innerText}</b> VS. <b>${challenger2NameResult.innerText}</b>
      <hr />
      <b>${winner}</b><br>
      WINNER
      <hr />
      <b>${guessCounter}</b> GUESSES
      <b>${calculateTime(startTime, endTime)}</b> MINUTES
      <div class="x-button">x</div>
    </div>
  </article>`;
 rightSection.innerHTML = rightSection.innerHTML + cardHtml;
}

function removeOneCard() {
  event.currentTarget.innerHTML = "";
  // console.log(event.target);
  // console.log(event.currentTarget)
}

function removeAllCards() {
  rightSection.innerHTML = `<button onclick="removeAllCards()" class="remove-cards">REMOVE CARDS</button>`;
}

// Remove All Cards
// var removeCards = document.querySelector('.remove-cards');
// function removeAllCards() {
//   console.log("remove")
//   rightSection.innerHTML = "";
// }
// removeCards.addEventListener('click', removeAllCards);






