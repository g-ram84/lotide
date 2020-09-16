const eqArray = function(arr1, arr2) {
  let isEqual = true
  if (arr1.length !== arr2.length) {
    isEqual = false;
    return isEqual;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false
    }
  }
  return isEqual;
}; console.log(eqArray([1,2,3], [1,2,3]));

const assertArraysEqual = function(actual, expected) {
  if (eqArray(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertArraysEqual([1,2,3], [1,2,3]);

const middle = function(arr) {
  // find the length of the array
  let newArr = [];
  let arrLength = arr.length;
  let i = arrLength/2;
  // is the length odd or even?
  if (arrLength <= 2) {
    return newArr;
  } else if(arrLength % 2 === 0) {
        newArr.push(arr[i-1]);
        newArr.push(arr[i]);
    }   else {
         newArr.push(arr[i-.5]); 
          }
  return newArr;
};
  // if length is 1-2 items, retun empty array
  // if odd find the middle number
  // if even, find middle 2 numbers
  // return as new array 
// assertArraysEqual(middle([1])) // => []
console.log(middle([1, 2])); // => 
console.log(middle([1, 2, 3, 4, 5])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])