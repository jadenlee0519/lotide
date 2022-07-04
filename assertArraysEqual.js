const assertArraysEqual = (actual, expected) => {
  const sucessMsg = `🟢 🟢 🟢 Array is matched ${actual} === ${expected}.`
  const failMsg = `🔴 🔴 🔴 Array is not matched ${actual} !== ${expected}.`

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

assertArraysEqual([3, 2, 5], [3, 2, 5]);
assertArraysEqual([4, 2, 0], [1, 2, 0]);


module.exports = assertArraysEqual;















// const assertArraysEqual = function(actual, expected) {
//   const sucessMsg = `🟢 🟢 🟢 Arguments match: ${actual} === ${expected} 🟢 🟢 🟢 `;
//   const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${actual} === ${expected} 🔴 🔴 🔴 `;
    

//   let isEqual = false;
//       for (let i = 0; i < actual.length; i++) {
//         if (actual[i] === expected[i]) {
//           isEqual = true;
//         } else if (actual[i] !== expected[i]) {
//           console.log(failMsg);
//           return;
//         }
//       }
//       if (isEqual) {
//         console.log(sucessMsg);
//       } else {
//         console.log(failMsg);
//       }

//   };


//   assertArraysEqual([3, 2, 5], [3, 2, 5]);
//   assertArraysEqual([4, 2, 0], [1, 2, 0]);

