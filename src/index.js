document.addEventListener("DOMContentLoaded", () => {
  // your code here

  /////// Task List Class
  const taskList = new TaskList();

  /////// Assign form and button
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDes = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const list = document.getElementById("list");
  const taskUl = document.getElementById("tasks");
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  /////optional
  // const userName = document.getElementById("user-form");
  const userNameType = document.getElementById("user-form-type");

  ////////////////

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(
      "Username: " + userNameType.value + "\nDescription: " + newTaskDes.value
    );

    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
