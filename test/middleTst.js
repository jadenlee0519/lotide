const assertArraysEqual = require('../assertArraysEqual.js')
const middle = require('../middle.js')

describe ('middle and check arr', () => {
  it ('find middle and check', () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  })
})
describe ('middle and check arr', () => {
  it ('find middle and check', () => {
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
})
describe ('middle and check arr', () => {
  it ('find middle and check', () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
})
describe ('middle and check arr', () => {
  it ('find middle and check', () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
})





