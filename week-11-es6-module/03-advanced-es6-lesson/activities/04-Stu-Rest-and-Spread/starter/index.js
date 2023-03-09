// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// spread operator ... 
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// combined array of all of the songs
// const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

console.log(newSongs);

// Exercise 2
// in this case we would be ading all of the values in the array tofether an returning the sumf of all of the values

const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3)); 
// 6

// TODO: What is this syntax that is being used as the parameter?
// rest operator compaed toex 2 - below can handle more - more flexible as a result
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));


// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
