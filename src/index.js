import './style.css';

import {addProjectBtn} from './projects-logic';
import {projectBtn} from './projects-dom';
import {projectsArray} from './projects-array';
import {projectFactory} from './project-factory';
import {refreshProjects} from './projects-dom';


document.addEventListener('DOMContentLoaded', () => {
  if (projectsArray.length === 0) {
    const newProject = projectFactory('default');
    projectsArray.push(newProject);
    refreshProjects();
    addProjectBtn.addProjectBtnClick();
    projectBtn.projectBtnClick();
  }
});



