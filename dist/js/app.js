"use strict";

// ECMAScript6
var addValues = function addValues(a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  return a + b + c;
};

console.log("Result: ", addValues(2, 6)); // Rest paramters

var addArray = function addArray(a, b) {
  var result = a + b;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  args.forEach(function (i) {
    result += i;
  });
  return result;
};

var arrA = [1, 3, 5];
console.log("Result: ", addArray.apply(void 0, [2, 6].concat(arrA))); // Spread parameters

var arrB = [2, 4, 6];
var concatArr = [10, 20].concat(arrB, [30]);
console.log(concatArr);
//# sourceMappingURL=app.js.map
