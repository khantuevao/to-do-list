import {taskFactory} from './task-factory';

const addTask = (() => {
  function _clickEvent() {
    const taskName = prompt('enter name', '');
    if (taskName === '') {
      alert('name cannot be empty');
      return;
    } else if (taskName === 'null') {
      alert('canceled');
      return;
    }
    const taskDate = prompt('enter date', '');
    if (taskDate === '') {
      alert('name cannot be empty');
      return;
    } else if (taskDate === 'null') {
      alert('canceled');
      return;
    }
  
    const newTask = taskFactory(taskName, taskDate);
    
    projectsArray..push(newProject);  
    
    renderProjects();
    addProjectBtnClick();
    projectBtn.projectBtnClick();
    console.log(projectsArray)
  }

  function addProjectBtnClick() {
    const addProjectBtnListen = document.getElementById('add-project-button');
    addProjectBtnListen.addEventListener('click', _clickEvent);
  }
      
  return {addProjectBtnClick}
})();