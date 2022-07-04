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

// const assertArraysEqual = function(arr1, arr2) {
//   const sucessMsg = `🟢 🟢 🟢 Arguments match: ${arr1} === ${arr2} 🟢 🟢 🟢 `;
//   const failMsg = `🔴 🔴 🔴 Arguments DO NOT match: ${arr1} !== ${arr2} 🔴 🔴 🔴 `;
//   if (eqArrays(arr1, arr2)) {
//     console.log(sucessMsg);
//   } else {
//     console.log(failMsg);
//   }
// };



const middle = arr => {
  let total = arr.length;
  let middle1;
  let middle2;
  let mid = [];

  if (total > 2 && total % 2 === 0) {
    middle1 = total / 2;
    middle2 = middle1 - 1;
    mid.push(arr[middle2])
    mid.push(arr[middle1])
  } else if (total > 2 && total % 2 !== 0) {
    middle1 = Math.floor(total / 2);
    mid.push(arr[middle1])
  }
  return mid;
}




// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


module.exports = middle;