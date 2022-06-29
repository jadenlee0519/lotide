const assertArraysEqual = function(arr1, arr2) {
  const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
  const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} === ${arr2} 🔴 🔴 🔴 `;
    let isEqual = false;
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          isEqual = true;
        } else if (arr1[i] !== arr2[i]) {
          console.log(failMsg);
          return;
        }
      }
    }
    if (isEqual) {
      console.log(sucessMsg);
    } else {
      console.log(failMsg);
    }
  };


  assertArraysEqual([3, 2, 5], [3, 2, 5]);
  assertArraysEqual([4, 2, 0], [1, 2, 0]);