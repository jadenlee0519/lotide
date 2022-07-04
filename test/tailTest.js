const tail = require('../tail.js')
const assertEqual = require('../assertEqual')

describe ('find tail item from arr and check', () => {
  it ('find tail and check', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assertEqual(words.length, 3);
  })
})