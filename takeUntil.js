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


const takeUntil = function(array, callback) {
  let newArr = []
  for (let unit of array) {
    if (callback(unit)) {
     return newArr;
    }
    newArr.push(unit);
  }
  return newArr; 
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");

const data3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const results3 = takeUntil(data3, x => x < 6);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ","), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data3, x => x < 6), [10, 9, 8, 7, 6]);