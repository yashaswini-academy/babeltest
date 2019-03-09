// ECMAScript6

let doSomething = (callback) => {
  console.log("I am in function");
  callback();
}

// doSomething(() => {
//   console.log("I'm in callback function with arrow notation");
// });


function largeFunction() {
  this.param1 = 1;
  this.param2 = [1,2,3,4];

  this.doSomething = () => {
    this.param2.forEach(i => {
      // Lexical `this` is not available inside forEach
      console.log(i + this.param1);
    });

    var result = this.param2.map(i => i*4);
    console.log(result);
  }
}

let f = new largeFunction();
f.doSomething();


