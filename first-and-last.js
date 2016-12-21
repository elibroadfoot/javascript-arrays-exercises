/*

First and Last

Write a JavaScript function called first() that takes one input, an array, and
returns the first element in that array.

Write another JavaScript function called last() that takes one input, an
array,and returns the lastt element in that array.

*/

// YOUR CODE GOES HERE

var array = ["Soccer", "Basketball", "Football", "Baseball"];

function first(array) {
  return array[0];
}

console.log("First is " + array[0])

function last(array) {
  return array[array.length - 1];
}

console.log("Last is " + array[array.length - 1])