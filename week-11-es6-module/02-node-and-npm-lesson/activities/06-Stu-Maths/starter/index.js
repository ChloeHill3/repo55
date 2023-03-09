// TODO: Import `maths.js`

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`


// TODO: Import `maths.js`
let maths = require("./maths");

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

let arguments = process.argv.slice(2);

let operation = arguments[0];
let numOne = arguments[1];
let numTwo = arguments[2];

console.log(operation)
console.log(numOne)
console.log(numTwo)

switch (operation) {
   case "product":
      console.log (maths.product(numOne, numTwo))
      break;
   case "product":
      console.log (maths.product(numOne, numTwo))
      break;
   case "product":
      console.log (maths.product(numOne, numTwo))
      break;   

   default:
      break;
}