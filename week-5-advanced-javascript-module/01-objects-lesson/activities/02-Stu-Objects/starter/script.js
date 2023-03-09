// Objects are a collection of properties
var customerOrder = {
   // Properties are made up of key-value pairs
   name: "Galaxy Sorbet Mocha",
   sugar: "2 cubes",
   isReady: true,
 };
 
 
 //WRITE YOUR CODE BELOW
 if (customerOrder.isReady === true){
   console.log ("Ready for pick-up");
 }
else if (customerOrder.isReady === false) {
   console.log ("Still in order queue");
}
 
 console.log(customerOrder.name);
 console.log(customerOrder.sugar);

    