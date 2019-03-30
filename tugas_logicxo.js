function xo(str) {
  // you can only write your code here!
  var valueX = 0;
  var valueO = 0;

  for (var i = 0 ; i <str.length; i++)
  if (str[i] === 'x'){
  valueX++}
  for (var j = 0 ; j < str.length; j++)
  if (str[j] === 'o'){
    valueO++}

 if (valueX == valueO ){
  return true;
} else {
  return false;
}
};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
