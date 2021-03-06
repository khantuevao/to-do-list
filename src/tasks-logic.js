import { projectsArray, saveToLocal } from "./projects-logic";

export {taskFactory, addTaskToArray, changeColor, taskChangeChecked, renderChecked};


const taskFactory = (date, name, description, priority) => {
  let checked = false;
  return {date, name, description, priority, checked}
}

function addTaskToArray(index) {
  const taskDate = document.getElementById('task-date').value;
  const taskName = document.getElementById('task-name').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskPriority = document.getElementById('task-priority').value;
  if (taskDate === '' || taskName === '') return;
  const newTask = taskFactory(taskDate, taskName, taskDescription, taskPriority);
  projectsArray[index].tasks.push(newTask);
}

function renderChecked(index) {
  const taskCheckboxes = document.getElementsByClassName('task-check');
  const taskDivs = document.getElementsByClassName('task');

  for (let i = 0; i < taskCheckboxes.length; i++) {
    if (projectsArray[index].tasks[i].checked === true) {
      taskCheckboxes[i].checked = true;
      taskDivs[i].style.opacity = '0.5';
  
    } else {
      taskCheckboxes[i].checked = false;
      taskDivs[i].style.opacity = null;
    }
  }
}

function taskChangeChecked(index) {
  const taskCheckboxes = document.getElementsByClassName('task-check');
  const taskDivs = document.getElementsByClassName('task');

  for (let i = 0; i < taskCheckboxes.length; i++) {
    taskCheckboxes[i].addEventListener('change', () => {
      if (!taskCheckboxes[i].checked) {
        projectsArray[index].tasks[i].checked = false;
        taskDivs[i].style.opacity = null;
        saveToLocal();
      } else {
        projectsArray[index].tasks[i].checked = true;
        taskDivs[i].style.opacity = '0.5';
        saveToLocal();
      }
    });
  }
}

function changeColor(index) {
  const taskDivs = document.getElementsByClassName('task');
  let color;
  projectsArray[index].tasks.forEach(element => {
    const prio = element.priority;
    switch (prio) {
      case '1':
        color = 'rgb(60, 200, 60)';
        break;
      case '2':
        color = 'rgb(150, 250, 100)';
        break;
      case '3':
        color = 'rgb(250, 150, 100)';
        break;
      case '4':
        color = 'rgb(220, 60, 60)';
        break;
    }
    const taskIndex = projectsArray[index].tasks.indexOf(element);
    taskDivs[taskIndex].style.backgroundColor = color;
  })
}