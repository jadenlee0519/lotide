const assertEqual = require('../assertEqual')
const head = require('../head.js')

describe('check two arry', () => {
  it('chech two array', () => {
    assertEqual(head([5,6,7]), 5);
  });

  it('chech two array', () => {
    assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");