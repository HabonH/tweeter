/* Using jQuery and an appropriate selector, register an 
event handler to the textarea element for the form
inside of the .new-tweet section. */
// Selector is <textarea> inside form
// Element is id="tweet-text"


// Define the element
// const textInput = document.getElementsById('tweet-text');
// const textArea = document.querySelector('textarea')



$(document).ready(function() {
  //Create variable to keep track of character length
  // Create variable to determine limit of 140
  // create a variable that leads to .counter from tweet-text
  
  $("#tweet-text").on( "input", function(event) {
    const charNum = $(this).val().length;
    const charLeft = 140 - charNum;
    const counter = $(this).parent().find('.counter');
    
    counter.val(charLeft);
    // CharLeft becomes negative, it should turn red
    // charLeft < 0, conditional
    if(charLeft < 0){
      counter.css("color", "red")
    } else {
      counter.css("color", "black")
    }
    
    // console.log(counter);
    
  });
});