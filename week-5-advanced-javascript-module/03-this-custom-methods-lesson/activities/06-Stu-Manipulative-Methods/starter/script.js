var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");

console.log(constellations);

// ways to remove specific string elements in an array
venusRemoved = planets.slice(0, 5);

console.log (venusRemoved);

planets.pop()
console.log (planets)

// new galaxy variable with combine arrays
let galaxy = constellations.concat(planets);

console.log(galaxy);



let upperCaseStar = star.toUpperCase
console.log (star.toUpperCase())
