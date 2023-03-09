// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x <= 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
 if(expression1 === true && expression2 === true){
//var expression1 = (x > 25); var expression2 = (x >= 50);
   console.log("True True")
 }
 else if(expression1 === true && expression2 === false){
//var expression1 = (x > 25); var expression2 = (x < 50);
   console.log("True False")
 }
 else if(expression1 === false && expression2 === true){
//var expression1 = (x <= 25); var expression2 = (x >= 50);
   console.log("False True")
 }
 else if(expression1 === false && expression2 === false){
//var expression1 = (x <= 25); var expression2 = (x > 50);
   console.log("False False")
 }
 
