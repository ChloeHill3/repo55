// TODO: What are we importing?

// loads fs module 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// appending/opens to a log.txt file 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works

  err ? console.error(err) : console.log('Commit logged!')
);

