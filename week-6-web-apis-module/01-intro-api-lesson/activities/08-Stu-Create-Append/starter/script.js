var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element


h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);


h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
var listEl = document.createElement("ol");
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);


// Create ordered list items
var li1 = document.createElement("li");
li1.textContent= "Milk";
li1.style.color = "red";
listEl.appendChild(li1);

var li2 = document.createElement("li");
li2.textContent= "Salmon";
li2.style.color = "pink";
listEl.appendChild(li2);


var li3 = document.createElement("li");
li3.textContent= "Turkey";
li3.style.color = "orange";
listEl.appendChild(li3);

var li4 = document.createElement("li");
li4.textContent= "Beef";
li4.style.color = "blue";
listEl.appendChild(li4);

var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

