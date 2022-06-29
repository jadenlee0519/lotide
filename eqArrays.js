// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  } else if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  }

};

const eqArrays = function(arr1, arr2) {
  let isEqual = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual = true;
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS