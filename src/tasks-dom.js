import { projectsArray } from "./projects-logic";

export { renderTasks, clearTaskInput, showContents };

function renderTasks(index) {
  const tasks = projectsArray[index].tasks;

  const taskItems = document.getElementById('task-items');
  taskItems.innerHTML = '';

  tasks.forEach(item => {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskUpper = document.createElement('div');
    taskUpper.classList.add('task-upper')

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.innerHTML = `${item.date}`;
    taskUpper.appendChild(taskDate);

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.innerHTML = `${item.name}`;
    taskUpper.appendChild(taskName);

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.classList.add('task-check');
    taskUpper.appendChild(taskCheck);

    const deleteTask = document.createElement('button');
    deleteTask.classList.add('delete-task');
    deleteTask.innerHTML = 'x';
    taskUpper.appendChild(deleteTask);

    const taskLower = document.createElement('div');
    taskLower.classList.add('task-lower');
    taskLower.textContent = `description: ${item.description}`

    task.appendChild(taskUpper);
    task.appendChild(taskLower);

    taskItems.appendChild(task);
  });
}

function clearTaskInput() {
  const taskDate = document.getElementById('task-date');
  taskDate.value = '';
  const taskName = document.getElementById('task-name');
  taskName.value = '';
  const taskDescription = document.getElementById('task-description');
  taskDescription.value = '';
  const taskPriority = document.getElementById('task-priority');
  taskPriority.value = '1';
}

function showContents() {
  const taskDivs = document.getElementsByClassName('task');
  const taskName = document.getElementsByClassName('task-name');

  for (let i = 0; i < taskDivs.length; i++) {
    taskName[i].addEventListener('click', () => {
      for (let j = 0; j < taskDivs.length; j++) {
        taskDivs[j].classList.remove('chosen');
      }
      taskDivs[i].classList.add('chosen');
      taskName[i].addEventListener('click', () => {
        taskDivs[i].classList.remove('chosen');
        showContents();
      })
    });
  }
}

