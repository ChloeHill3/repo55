// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});
// every elemnt o the page you can put event listeners - if you want theme stwitcher button 
// a tag e.g. grab first a tag. doesnt have to be on a button or switch, footer change the querySelecto "footer"
// method add event listnered hwat knd of event to do as first parameter. When you click -call this function 