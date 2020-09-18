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


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const letterGrab = function(word) {
  return word[0];
};

const thirdLetter = function(phrase) {
  return phrase[2];
};

const firstLetter = function(word2) {
  return word2[0];
}

assertArraysEqual(map(['ground', 'control', 'tom'], letterGrab), ['g', 'c', 't']);
assertArraysEqual(map(['Thank you for helping'], thirdLetter), ['a']);
assertArraysEqual(map(['jolly'], firstLetter), ['j']);


