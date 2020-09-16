function reverse(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

for(let t = 2; t<=process.argv.length-1; t++){
  console.log(reverse(process.argv[t]));
}
