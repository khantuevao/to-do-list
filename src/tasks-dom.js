import { projectsArray } from "./projects-logic";

export { renderTasks };

function renderTasks(index) {
  const tasks = projectsArray[index].tasks;

  const taskItems = document.getElementById('task-items');
  taskItems.innerHTML = '';

  tasks.forEach(item => {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.innerHTML = `${item.date}`;
    task.appendChild(taskDate);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.innerHTML = `${item.name}`;
    task.appendChild(taskName);

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.classList.add('task-check');
    task.appendChild(taskCheck);

    const deleteTask = document.createElement('button');
    deleteTask.classList.add('delete-task');
    deleteTask.innerHTML = 'X';
    task.appendChild(deleteTask);

    taskItems.appendChild(task);
  });
}