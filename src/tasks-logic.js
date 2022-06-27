import { projectsArray } from "./projects-logic";
export {taskFactory, addTaskToArray};

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