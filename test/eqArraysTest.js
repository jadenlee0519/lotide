const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays.js')

it ('find arr and check', () => {
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
})



