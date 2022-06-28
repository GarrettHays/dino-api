import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoService from './utility.js'



$(document).ready(function() {
  $('#dino-ipsum-button').click(function() {
    let wordCount = 1;
    let promise = DinoService.getDino(wordCount);
    promise.then(function(response) {
      const dinoPoo = JSON.parse(response);
      const dinoString = new String(`${dinoPoo}`)
      console.log(dinoString);
      for (let i = 0; i < dinoString.length; i++) {
        
        dinoArray[i] = "_";
      }
      $('.show-ipsum').text(dinoPoo);
    //   $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

// update the call to return 1 dino name [x]
// update the button/user instruction to "random dino" or "start game" [x]
// -- API gets called, we get dino name [x]
// separate dino name to individual letters [x]
// prompt user to input letter guess [x]
// for loop through array of individualized dino name - check for guess
// return true or false
// display correctly guessed letters