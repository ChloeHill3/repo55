var numbers = [1, 2, 3, 4]

//Iterative Methods

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number < 3) {
    console.log(number.toString() + ' is less than 3');
  } else {
    console.log(number.toString() + ' is NOT less than 3');
  }
}

numbers.forEach(function (number) {
  if (number < 3) {
    console.log(number.toString() + ' is less than 3');
  } else {
    console.log(number.toString() + ' is NOT less than 3');
  }
})


var numbersDoubled = numbers.map(function(number) {
  return number * 2
 })



console.log(numbersDoubled)


var numbers = [1, 2, 3, 4]
numbers.map(function(number) {
  
 })





 
// map replace each item with soemthign slightly different 

// numbers.map(function(number)){
//   return number*2

// }
// numbers.map(function(number)){
//   return [number]
  
// }

// numbers.map(function(number)){
//   return [number: number]
  
// }