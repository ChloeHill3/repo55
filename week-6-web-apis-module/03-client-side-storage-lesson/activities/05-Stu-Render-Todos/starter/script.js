var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos(){
   let todoContent = "";
   todoList.innerHTML = "";
   todoCountSpan.textContent = todos.length

   for (let i = 0; i < todos.length; i++) {
   const todo = todos[i];
   let liEl = document.createElement("li")


   liEl.textContent = todos[i]

   todoList.appendChild(liEl)
}
}


renderTodos();
//dynamical elements in javascript, puttin the inside of UL a bunch of Li


todoForm.addEventListener("submit", function(event){
   event.preventDefault;
   if (todoInput.value.trim( !==""))
   todos.push(todoInput.value)
   todoInput.textContent = "";
   renderTodos();
   });
