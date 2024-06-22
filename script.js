const addTodo = document.querySelector(".add-todo");
const btn = document.querySelector("#btn");
const taskRow = document.querySelector(".task-row ul");

btn.addEventListener("click", () => {
  if (addTodo.value === "") alert("Please Input Any Work");
  // else{
  //     let li = document.createElement("li");
  //     li.innerHTML = addTodo.value;
  //     taskRow.appendChild(li);
  //     let span = document.createElement("span");
  //     span.innerHTML= "\u00d7";
  //     li.appendChild(span);
  // }
  else {
    let li = document.createElement("li");
    li.innerHTML = addTodo.value;
    taskRow.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  addTodo.value = "";
  saveTask();
});

taskRow.addEventListener("click", (e) => {
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveTask();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTask();
  }
}, false );

function saveTask(){
    localStorage.setItem("Data" , taskRow.innerHTML);
}

function showTask(){
    taskRow.innerHTML = localStorage.getItem("Data");
}
showTask();