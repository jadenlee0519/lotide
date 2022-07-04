const assertArraysEqual = require('../assertArraysEqual.js')

describe('chenck two arry', () => {
  it('check two array', () => {
    assertArraysEqual([3, 2, 5], [3, 2, 5]);
  });

  it('check two array', () => {
    assertArraysEqual([4, 2, 0], [1, 2, 0]);
  });
});





