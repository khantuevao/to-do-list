import { projectFactory } from './project-factory';
import { projectsArray } from './projects-array';

export default addProject;

const addProject = (() => {
  const addProjectBtn = document.getElementById('add-project-button');

  addProjectBtn.addEventListener('click', () => {
    const newProject = projectFactory(`${prompt('enter name', '')}`);
    
    if (newProject.name === '') {
      alert('name cannot be empty');
      return;
    } else if (newProject.name === 'null') {
      alert('canceled');
      return;
    }

    projectsArray.push(newProject);
    
    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('project-item');
    newProjectBtn.innerHTML = `${newProject.name}`;

    const projectItems = document.getElementById('project-items');
    projectItems.appendChild(newProjectBtn);
  })
})();