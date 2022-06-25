import './style.css';

import {addProjectBtn} from './projects-logic';
import {projectBtn} from './projects-dom';
import {projectsArray} from './projects-array';
import {projectFactory} from './project-factory';
import {renderProjects} from './projects-dom';
import {renderTasks} from './tasks-dom';


document.addEventListener('DOMContentLoaded', () => {
  if (projectsArray.length === 0) {
    const newProject = projectFactory('default');
    projectsArray.push(newProject);
    renderProjects();
    addProjectBtn.addProjectBtnClick();
    projectBtn.projectBtnClick();
    renderTasks();
  }
});



