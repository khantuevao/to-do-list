import { projectsArray } from "./projects-array";

export {renderTasks};


const renderTasks = () => {
  const taskItems = document.getElementById('task-items');
  taskItems.innerHTML = '';

  const selectedProject = document.querySelector('.selected');
  const selectedProjectName = `${selectedProject.textContent}`;

  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].name === selectedProjectName) {
      (projectsArray[i].tasks).forEach(item => {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskDate = document.createElement('div');
        taskDate.classList.add('task-date');
        taskDate.innerHTML = `${item.date}`;
        task.appendChild(taskDate);

        const taskTitle = document.createElement('div');
        taskTitle = document.classList.add('task-title');
        taskTitle.innerHTML = `${item.title}`;
        task.appendChild(taskTitle);

        const taskCheck = document.createElement('input');
        taskCheck.setAttribute('type', 'checkbox');
        taskCheck.classList.add('task-check');
        task.appendChild(taskCheck);

        const taskDelete = document.createElement('button');
        taskDelete.classList.add('task-delete');
        taskDate.innerHTML = 'X';
        task.appendChild(taskDelete);

        taskItems.appendChild(task);
      });
    };
  };
  const lowerBtns = document.createElement('div');
  lowerBtns.setAttribute('id', 'lower-buttons');

  const addTaskBtn = document.createElement('button');
  addTaskBtn.setAttribute('id', 'add-task-button');
  addTaskBtn.innerHTML = '+ add task';
  lowerBtns.appendChild(addTaskBtn);

  const projectDelete = document.createElement('button');
  projectDelete.setAttribute('id', 'project-delete');
  projectDelete.innerHTML = 'delete project';
  lowerBtns.appendChild(projectDelete);

  taskItems.appendChild(lowerBtns);
};