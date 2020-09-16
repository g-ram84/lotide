const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
  } 
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertArraysEqual([1,2,3], [1,2,3]);

const without = function(arr, arr2) {
  let newArray = []
  let i = 0;
  while (i < arr.length) {
      // for (let j = 0; j < arr2.length; j++) {
        if (!arr2.includes(arr[i])) {
          newArray.push(arr[i])
        }
      // } 
      i++;
  }
  return newArray;
}
assertArraysEqual(without([2,2,3,4,5],[2,4]),[3,5]);
//without function returns arr - value [3, 5]