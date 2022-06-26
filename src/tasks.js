import { projectsArray } from "./projects-array";

export {getIndex};
export {renderTasks};


function getIndex() {
  const selected = document.querySelector('.selected');
  const selectedQuery = (element) => element.name === selected.innerHTML;
  const selectedIndex = projectsArray.findIndex(selectedQuery);
  
  return selectedIndex;
}

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

  const lowerButtons = document.createElement('div');
  lowerButtons.setAttribute('id', 'lower-buttons');

  const addTask = document.createElement('button');
  addTask.setAttribute('id', 'add-task');
  addTask.innerHTML = '+ add task';
  lowerButtons.appendChild(addTask);

  const deleteProject = document.createElement('button');
  deleteProject.setAttribute('id', 'delete-project');
  deleteProject.innerHTML = 'delete project';
  lowerButtons.appendChild(deleteProject);

  taskItems.appendChild(lowerButtons);
}