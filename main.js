const task = document.getElementById("task");
let myTasks = [];
const emptyTasks = [];
let arrayStorage = [];
const add = document.getElementById("add");
const remove = document.getElementById("removeAll");
let taskResult = document.getElementById("taskResult");
const form = document.getElementById("form");
let myList = document.getElementById("myList");
const main = document.getElementById("main");
let aZ = document.getElementById("AZ");


form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addTask(task) {
  myTasks.push(task.value);
  taskResult.innerHTML = "Task added";
}

aZ.addEventListener("click",(ul) => {
  var ul = document.getElementById("myList");

  Array.from(ul.getElementsByTagName("li"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
    taskResult.innerHTML = "Tasks organized alphabetically";
});


add.addEventListener("click", () => {
  if (task.value != "") {
    addTask(task);
    const node = document.createElement("li");
    const spanNode = document.createElement("span");
    spanNode.innerHTML = task.value;
    myList.appendChild(node);
    node.appendChild(spanNode);
    const button = document.createElement("button");
    button.setAttribute("id", "buttonRemove");
    button.innerText = "Delete";
    node.appendChild(button);

    button.addEventListener("click", (e) => {
      node.remove();
      taskResult.innerHTML = "Task removed";
      const parent = e.target.parentNode;
      parent.remove();
    });

    localStorage.setItem("myTasks", myTasks);
    if (myTasks != null) {
      arrayStorage = localStorage.getItem("myTasks").split(",");

      console.log(arrayStorage);
    }

    spanNode.addEventListener("click", () => {
      spanNode.innerHTML = prompt("Edit task");
      taskResult.innerHTML = "Task Edited";
    });

  }
});


removeAll.addEventListener("click", () => {
  myTasks = emptyTasks;
  myList.remove();
  const ulCreation = document.createElement("ul");
  ulCreation.setAttribute("id", "myList");
  myList = ulCreation;
  main.appendChild(ulCreation);
  if(task.value!=""){
  taskResult.innerHTML = "Tasks removed";
}
  localStorage.clear();
});
