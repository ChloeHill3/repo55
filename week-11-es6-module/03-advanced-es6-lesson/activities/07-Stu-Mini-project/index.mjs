
// import using different syntax 

import inquirer from 'inquirer';

let { first_name, last_name, fav_color } = await inquirer
   .prompt([

      // in order to you to await something - that thing must return a promise
      // .then works but majorly verbose
      // update includes async await .thenable means awaitable

      {
         type: 'input',
         name: 'first_name',
         message: "What's your first name",
      },
      {
         type: 'input',
         name: 'last_name',
         message: "What's your last name",
      },
      {
         type: 'input',
         name: 'fav_color',
         message: "What's your favorite color",
      },
      

   ])
console.log("Full Name: ", first_name, last_name, "Favourite Color:", fav_color)

