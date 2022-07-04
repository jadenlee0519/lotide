// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed: " + actual + "===" + expected);
//   } else {
//     console.log("❌❌❌ Assertion Failed: " + actual + "!==" + expected);
//   }

// };

// const assertEqual = function(...){...}
const assertEqual = require('./assertEqual')

const head = function (arry) {
  return arry [0]
}
// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;