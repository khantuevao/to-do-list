import { projectsArray } from "./projects-logic";

export {renderProjects, changeSelected};


function renderProjects() {
  const projectItems = document.getElementById('project-items');
  projectItems.innerHTML = '';

  projectsArray.forEach(item => {
    const project = document.createElement('button');
    project.classList.add('project');
    project.textContent = `${item.name}`;
    projectItems.appendChild(project);
  });  
}

function changeSelected() {
  const projects = document.getElementsByClassName('project');
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', () => {
      for (let j = 0; j < projects.length; j++) {
        projects[j].classList.remove('selected');
      }
      projects[i].classList.add('selected');
    });
  }
}