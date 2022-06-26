import { projectsArray } from "./projects-array";

export {renderProjects};


function renderProjects() {
  const projectItems = document.getElementById('project-items');
  projectItems.innerHTML = '';

  projectsArray.forEach(item => {
    const project = document.createElement('button');
    project.classList.add('project');
    project.textContent = `${item.name}`;
    projectItems.appendChild(project);
  });

  const addProject = document.createElement('button');
  addProject.setAttribute('id', 'add-project');
  addProject.innerHTML = '+ add project';
  projectItems.appendChild(addProject);
}