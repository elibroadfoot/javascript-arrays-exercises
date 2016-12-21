/*

Longest String

Given an array of strings, find the longest string and print out that string.
hint: strings also have the .length property - i.e `"starburst".length` is 9

*/

// YOUR CODE GOES HERE

var words = ["dog", "kitty", "cabbage", "corn"];
var longestString = "";

for(var i = 0; i < words.length; i++) {
  var string = words[i];
  if(string.length > longestString.length) {
    longestString = string;
  }
}
console.log("The longest string is " + longestString + " with " + longestString.length + " letters.");