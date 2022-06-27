import { projectsArray } from "./projects-logic";
export {taskFactory, addTaskToArray, changeColor};

const taskFactory = (date, name, description, priority) => {
  const checked = false;
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

//task select
//get index of project
//get array of elements from class




//task checked






//task change color
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