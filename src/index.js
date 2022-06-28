import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './utility.js'



$(document).ready(function() {
  $('#dino-ipsum-button').click(function() {
    $('#gameSetup').hide();
    $('#gamePlay').show();
    let wordCount = 1;
    let promise = DinoService.getDino(wordCount);
    let lives = 9;
    let answerArray = [];
    promise.then(function(response) {
      const dinoPoo = JSON.parse(response);
      const dinoString = new String(`${dinoPoo}`).toLowerCase();
      for (let i = 0; i < dinoString.length; i++) {
        answerArray[i] = "x";
  }

  $('#dinoGuess').click(function() {
    let failCounter = 0;
    for (let i = 0; i < dinoString.length; i++) {
      let userGuess = $('#dinoInput').val();
      console.log(dinoString);
      if (userGuess === dinoString[i]) {
        answerArray[i] = userGuess;
        // display correctly guessed letters
      } else {
        failCounter++;
      }
      if (failCounter >= dinoString.length) {
        lives--;
        failCounter = 0;
      }
      console.log(lives);
      console.log(answerArray);
    }
    })
    });
  });
});

// update the call to return 1 dino name [x]
// update the button/user instruction to "random dino" or "start game" [x]
// -- API gets called, we get dino name [x]
// separate dino name to individual letters [x]
// prompt user to input letter guess [x]
// for loop through array of individualized dino name - check for guess [x]
// update answerArray and/or lives counter [x]
// display correctly guessed letters 
// display lives left
// define the endgame (win or lose)
// make less blue