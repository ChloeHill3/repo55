// Write your code here


let animals = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i = 0; i < animals.length; i++) {
   const animal = animals[i];

   if (animal[0] === "o" || animal[0] === "c") {

      console.log(animal + " contains the letter 'o' or 'c'")
   }
}

