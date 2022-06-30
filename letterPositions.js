
const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} !== ${arr2} 🔴 🔴 🔴 `;
  if (eqArrays(arr1, arr2)) {
    console.log(sucessMsg);
  } else {
    console.log(failMsg);
  }
}

/*
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        let val = results[letter];
        val.push(i);
        results[letter] = val;
      } else {
        results[letter] = [i];
      }
    }
  }
  return results
};
*/

const letterPositions = function(sentence) {
  results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i]
    if (letter !== ' ') {
      if(results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i]
      }
    }
  }
  return results;
}


console.log(letterPositions("lighthouse in the house"));