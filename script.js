const inputValue = document.getElementById("inputBox");
const tasks = document.getElementById("taskContainer");
const btn = document.getElementById("addBtn");

function addTask() {
  if (inputValue.value === "") {
    alert("please enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputValue.value;
    tasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputValue.value = "";
  saveData();
}

inputValue.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

tasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

function showTask() {
  tasks.innerHTML = localStorage.getItem("data");
}

showTask();
