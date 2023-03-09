//RPS 

//Player vs computer 

// Way to keep track of wins losses and ties
//make variables for wins losses and tie

//for keeping track of the users choice
// I could use a prompt() and store this in a vairable 
//https://developer.mozilla/org/en-US/docs/Web/API/Window/prompt


//How would I get the computers choice
// How can i get the computers choice in a string
// The computer has to pick from rock paper or scissors

// let choices = ["p", "r", "s"]
// choices[0]
// choices[1]
// choices[2]
// choices[3]

//Math.random()
//console.log(Math.floor(Math.random() = 3)
//Math.floor


// let randomNumber = Math.floor(Math.random()= 3)

//coditionals
//9 possible combinations
//3 ties 
// 3 losses
// 3 wins

// if (pc === "p" && cc === "p"){
//    tie
// } else if (p === "r' && cc === "r"){
//    tie


// let choices = prompt["p", "r", "s"]

// let randomNumber = Math.floor(Math.random() * 3)

// if (pc === "p" && cc === "p"){
//    return "tie: ";
// } 
// else if (pc === "r" && cc === "r"){
//    return "tie: ";
// }
// else if (pc === "s" && cc === "s"){
//    return "tie: ";
// }

// if (pc === "r" && cc === "s"){
//    return "rock wins: ";
// }

// else if (pc === "p" && cc === "r"){
//    return "paper wins:" ;
// }

// else if (pc === "s" && cc === "p"){
//    return "scissor wins";
// }



// if (pc === "p" && cc === "r"){
//    return "rock loses: ";
// }

// else if (pc === "r" && cc === "p"){
//    return "paper wins:" ;
// }

// else if (pc === "s" && cc === "p"){
//    return "scissor wins";
// }



let wins = 0;
let losses = 0;
let ties = 0;

for (let i = 0; i < 10; i++) {

   
let choices = ["r", "p", "s"];

let randomNumber = Math.floor(Math.random() *choices.length);

let computerChoice = choices[randomNumber];
let personChoice = prompt ("Rock, Paper or Scissors?");


console.log(personChoice);
console.log(computerChoice);


// tie

if (personChoice === "p" && computerChoice === "p"){
   ties++;
   alert("you tie");
} 
else if (personChoice === computerChoice === "r"){
   ties++;
   alert("you tie");
}
else if (personChoice === "s" && computerChoice === "s"){
   ties++;
   alert("you tie");
}

// wins
if (personChoice === "r" && computerChoice === "s"){
   wins++;
   alert("You win")
}

else if (personChoice === "p" && computerChoice === "r"){
   wins++;
   alert("You wins")
}

else if (personChoice === "s" && computerChoice === "p"){
   wins++;
   alert("You wins")
}

// losses
if (personChoice === "p" && computerChoice === "r"){
   losses++;
   alert("you lost");
}

else if (personChoice === "r" && computerChoice === "p"){
   losses++;
      alert("you lost");
}

else if (personChoice === "p" && computerChoice === "s"){
   losses++;
   alert("you lost");
}

console.log (`wins, losses, ties`)


}
let playAgain = prompt("Do you want to play again?")
console.log(playAgain);

