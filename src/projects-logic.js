import { projectFactory } from './project-factory';
import { projectsArray } from './projects-array';
import { renderProjects } from './projects-dom';
import { projectBtn } from './projects-dom';

export { addProjectBtn };


const addProjectBtn = (() => {
  function _clickEvent() {
    const newProject = projectFactory(`${prompt('enter name', '')}`);
    if (newProject.name === '') {
      alert('name cannot be empty');
      return;
    } else if (newProject.name === 'null') {
      alert('canceled');
      return;
    }
    projectsArray.push(newProject);  
    console.log(projectsArray);
    console.log(projectsArray[1].name)
    
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