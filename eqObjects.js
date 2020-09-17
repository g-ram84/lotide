const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };


const eqObjects = function (object1, object2) {
  let listOfKeys1 = Object.keys(object1);
  let listOfKeys2 = Object.keys(object2);
  if (listOfKeys1.length !== listOfKeys2.length) {
   return false;
 }
  for (let key of listOfKeys1) {
    let value1 = object1[key];
    let value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      let checkArray = eqArray(value1, value2); 
       if (checkArray === false) {
         return false;
       } 
  } else {
    if (value1 !== value2) {
      return false;
    }
  }
 }
 return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, dc);
eqObjects(cd, cd2);