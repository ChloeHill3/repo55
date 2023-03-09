//WRITE YOUR CODE BELOW
//WRITE YOUR CODE BELOW


var menu = {
   blackCoffee:5,
   whiteCoffee:6,
   Mocha:5,
}



var prices = Object.values(menu)

var total = 0;

// for loop to add to total

for (var i = 0; i < prices.length; i++) {
total += prices[i];
}
// Creates an array of the keys of the object
console.log(Object.keys(menu));
// Creates an array of the values of the object
console.log(Object.values(prices));
console.log ("Total Price of Menu = "+ total)
