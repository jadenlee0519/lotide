const assertArraysEqual = function(actual, expected) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${actual} === ${expected} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${actual} === ${expected} 🔴 🔴 🔴 `;
    
  let isEqual = false;
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === expected[i]) {
          isEqual = true;
        } else if (actual[i] !== expected[i]) {
          console.log(failMsg);
          return;
        }
      }
      if (isEqual) {
        console.log(sucessMsg);
      } else {
        console.log(failMsg);
      }

  };


  const flatten = function(nestedArr) {
    let newArr = [].concat.apply([], nestedArr);
    return newArr
  }
    console.log(flatten([1,2,[3,4]]));