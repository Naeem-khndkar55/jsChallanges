let Tasks = [];

// Function to retrieve tasks from localStorage on page load
window.onload = function () {
  if (localStorage.getItem("tasks")) {
    Tasks = JSON.parse(localStorage.getItem("tasks"));
    render();
  }
};

function addTask() {
  let taskInput = document.querySelector(".task");
  let newTask = taskInput.value;

  if (newTask === "") {
    alert("Please add your task first");
  } else {
    let taskDate = document.querySelector(".task_date");
    let dueDate = taskDate.value;

    taskInput.value = "";
    taskDate.value = "";

    Tasks.push({ task: newTask, date: dueDate });

    // Save updated Tasks array to localStorage
    localStorage.setItem("tasks", JSON.stringify(Tasks));

    render();
  }
}

function render() {
  let taskList = document.querySelector(".task_container");
  taskList.innerHTML = "";

  Tasks.forEach(function (task, index) {
    let element = document.createElement("p");
    element.innerText = `${task.task} : ${task.date}`;
    let del = document.createElement("button");
    del.addEventListener("click", function () {
      deleteTask(index);
    });

    element.appendChild(del);
    taskList.appendChild(element);
  });
}

function deleteTask(index) {
  Tasks.splice(index, 1);

  // Save updated Tasks array to localStorage after deletion
  localStorage.setItem("tasks", JSON.stringify(Tasks));

  render();
}
