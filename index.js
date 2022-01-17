

const inputTaskBtn = document.getElementById("add-task-btn");
const inputTaskTxt = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const doneList = document.getElementById("done-list");

function resetNewTaskInput() {
  inputTaskTxt.value = "";
}

function setNewTaskLabel(newTaskElement) {
  const taskDetails = inputTaskTxt.value;
  const newTaskLabel = document.createElement("label");
  newTaskLabel.innerText = taskDetails;
  newTaskLabel.className = "task-label";
  newTaskElement.appendChild(newTaskLabel);
}

function setNewTaskButton(newTaskElement) {
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Mark as Done";
  doneBtn.className = "done-btn";
  newTaskElement.appendChild(doneBtn);
}

function setDoneBtnOnClick(task) {
  const doneBtn = task.querySelector(".done-btn");
  doneBtn.onclick = markAsDoneHandler;
}

function populateNewTaskElement(newTaskElement) {
  setNewTaskLabel(newTaskElement);
  setNewTaskButton(newTaskElement);
  setDoneBtnOnClick(newTaskElement);
}


function createNewTaskHandler() {
  if (inputTaskTxt.value === "") return;
  const newTaskElement = document.createElement("li");
  populateNewTaskElement(newTaskElement);
  taskList.appendChild(newTaskElement);
  resetNewTaskInput();
}

function markAsDoneHandler() {
  const taskElement = this.parentNode;
  const taskList = taskElement.parentNode;
  const newTaskElement1 = document.createElement("li")
  populateNewTaskElement(newTaskElement1);
  const mark = taskList.removeChild(taskElement);
  doneList.appendChild(mark);

}

inputTaskBtn.onclick = createNewTaskHandler;

document.addEventListener("keydown", function (event) {
  if (event.code !== "Enter") return;
  createNewTaskHandler();
});


