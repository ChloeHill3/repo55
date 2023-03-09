var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;


  if (element.matches(".box")) {

    let number = element.getAttribute("data-number");
    element.textContent = number;  

    element.sataset.state = "showing";
    element.setAttribute("data-state", "showing")
    
    element.setAttribute("src", element.dataset.hidden);
else {
    element.textContent = state
    element.textContent = number; 
    element.setAttribute("src", element.dataset.hidden); 


}

  }
  });





