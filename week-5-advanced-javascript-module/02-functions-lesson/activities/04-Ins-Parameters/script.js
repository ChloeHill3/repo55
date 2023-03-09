// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);


var array = [7, 'Hello', true];

function add(x) {
  if (x < 10) {
    console.log(x + 1);
  } else {
    console.log(x - 1);
  }
  return;
}

function print(word) {
  console.log(word);
  return;
}

function correct(bool) {
  console.log('The Answer is: ', bool)
  return;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    add(array[i]);
  } else if (array[i] === 'Hello') {
    print(array[i]);
  } else {
    correct(array[i])
  }
}

function valueAndType(param1, param2) {

if (param1 === param2){
console.log("equal in value and type")

}
  else if (param1 == param2){
  console.log ("not equal")
  }

}
valueAndType(1, 1)
valueAndType(1, "1")
valueAndType(1, 2)


let numbers = [12,50,35,12,10,2,4,8,9]


var logArrayGreatThan10 = function (numbers){
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number > 10){
    console.log(number + " number is greater than 10 ")
  }
  else{
    console.log(number + " number is less than or equal to 10 ")
  }
}
}
logArrayGreatThan10(numbers);



