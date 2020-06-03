/* eslint-disable no-undef */
'use strict';

// Player is given a number to count to.
// Then they count 1 up from that number

//For numbers divisable by 3, substitute 'fizz'

//For numbers divisable by 5, substitute 'buzz'

//For number divisable by both, sub 'fizzbuzz'

//create an event listener that listens for when a user
//submits a form indicating how high the count.  This event
//This event should cause the program to create the FizzBuzz
//sequence up to the number requested by the user.

$(function fizzbUzzApp() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const num = $(event.currentTarget).find('#number-choice').val();

    let $fuzz;
    
    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {                        //div by 3
        $fuzz = $(`<div class="fizz-buzz-item fizz">
        <span>fizz</span>
        </div>`);
      } else if (i  % 5 === 0 &&  i % 3 !== 0) {               //div by 5
        $fuzz = $(`<div class="fizz-buzz-item buzz">
        <span>buzz</span>
        </div>`);
      } else if (i % 3 === 0 && i % 5 === 0 && i !== 0){       //div by 15
        $fuzz = $(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
        </div>`);
      } else {
        $fuzz = $(`<div class="fizz-buzz-item"><span>${i}</span>
        </div>`);
      }
      $('.js-results').append($fuzz);                                     
    }
  });
});

$(fizzbUzzApp);





