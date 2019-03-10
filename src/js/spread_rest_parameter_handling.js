// ECMAScript6

let addValues = (a, b, c=2) => {
  return a + b + c;
}

console.log("Result: ", addValues(2, 6));

// Rest paramters
let addArray = (a, b, ...args) => {
  let result = a + b;
  args.forEach(i => {
    result += i;
  });

  return result;
}

let arrA = [1, 3, 5];
console.log("Result: ", addArray(2, 6, ...arrA));


// Spread parameters
let arrB = [2, 4, 6];

let concatArr = [10, 20, ...arrB, 30];
console.log(concatArr);