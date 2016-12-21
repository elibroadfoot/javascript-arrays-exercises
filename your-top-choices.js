/*

Your Top Choices

Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
picking the right suffix for the number based on what it is.

*/

// YOUR CODE GOES HERE


var topChoices = ["Soccer", "Basketball", "Football", "Baseball"];

for (var i = 0; i < topChoices.length; i++) {
  var position = i + 1;
  if (position === 1) {
        choiceEnding = 'st';
    } else if (position == 2) {
        choiceEnding = 'nd';
    } else if (position == 3) {
        choiceEnding = 'rd';
    } else {
        choiceEnding = 'th';
    }
    console.log('My ' + position + choiceEnding + ' choice is ' + topChoices[i]);
}