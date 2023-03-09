var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function (){
  count++
  return setCounterText();

  // increment the count variable

  // call the setCounterText function
})
// TODO: Add event listener to decrement button 
decrementEl.addEventListener("mouseout", function(){
 
  
if (count > 0){
 count--;
 return setCounterText();
}


})
