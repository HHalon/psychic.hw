// letter bank
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h"];

var wins = 0;
var loses = 0;
var lives = [10];
var guessLetter = [];

var directionText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var livesText = document.getElementById("lives-text");
var userGuessText = document.getElementById("userGuess-text");

// choose random letter

var ranLetter = letterBank[Math.floor(Math.random() * letterBank.length)];
var letter = ranLetter;

// look at conslole to cheat
console.log(letter);

document.onkeyup = function(event) {
  var userGuess = event.key;

  // if user guesses the rigth letter
  if (userGuess === letter) {
    wins++;
    lives = 9;
    guessLetter = [];
  }
  console.log(userGuess);

  // if user guesser wrong letter
  if (userGuess !== letter) {
    lives--;
    guessLetter.push(userGuess);
  }

  //when user runs out of lives
  if (lives < 0) {
    lives = 9;
    loses++;
    guessLetter = [];
  }

  // window display
  directionText.textContent = "";

  winsText.textContent = "wins: " + wins;
  livesText.textContent = "lives: " + lives;
  losesText.textContent = "loses: " + loses;
  userGuessText.textContent = "What you have guessed: " + guessLetter;
};
