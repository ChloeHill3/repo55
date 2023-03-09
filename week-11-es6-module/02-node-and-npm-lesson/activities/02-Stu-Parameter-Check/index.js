let arguments = process.argv.slice(2);
console.log(arguments);

// arguments passed from the command line are accessed by index
let input1 = parseInt(arguments[0])
let input2 = parseInt(arguments[1])

if (input1 === input2){
   console.log (true)

}
else {
   console.log (false)
}
