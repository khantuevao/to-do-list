import { projectsArray } from "./projects-logic";
export {taskFactory, addTaskToArray, changeColor, taskChangeChecked};

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

//task show contents


function checkIfChecked(index) {
  if (projectsArray[index].tasks[i].checked = 'true') {
    taskCheckboxes[i].checked;
    tasks[i].style.opacity = '0.5';

  } else {
    !taskCheckboxes[i].checked;
    tasks[i].style.opacity = null;

  }
}


//task checked
function taskChangeChecked(index) {
  const taskCheckboxes = document.getElementsByClassName('task-check');

  for (let i = 0; i < taskCheckboxes.length; i++) {
    taskCheckboxes[i].addEventListener('change', () => {
      if (!taskCheckboxes[i].checked) {
        projectsArray[index].tasks[i].checked = false;
      } else {
        projectsArray[index].tasks[i].checked = true;
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