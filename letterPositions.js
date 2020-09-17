const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } 
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertArraysEqual([1,2,3], [1,2,3]);

const letterPositions = function(text) {
  const results = {};
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (results[letter]) {
      results[letter].push(i);

    } else {
      results[letter] = [i];
    }
  }
  return results;
};
console.log(letterPositions("dfasdfjsdklfjhsdkfjhask"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);