let codeEl = document.querySelector("#code")
let keyEl = document.querySelector("#key")

function keydownAction(event) {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  console.log(event.key);
  keyEl.textContent = event.key;
  codeEl.textContent = event.keyCode;
}

function keyupAction(event) {
  document.querySelector("#status").innerHTML = "KEYUP Event";
  console.log(event.key);
  keyEl.textContent = event.key;
  codeEl.textContent = event.keyCode;
  
}

document.addEventListener("keyup", keyupAction);


document.addEventListener("keydown", keydownAction);

