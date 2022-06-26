import { projectsArray } from "./projects-array";

export {renderProjects};
export {changeSelected};


function renderProjects() {
  const projectItems = document.getElementById('project-items');
  projectItems.innerHTML = '';

  projectsArray.forEach(item => {
    const project = document.createElement('button');
    project.classList.add('project');
    project.textContent = `${item.name}`;
    projectItems.appendChild(project);
  });

  //make last created project selected
  const projects = document.getElementsByClassName('project');
  const selected = projects[projects.length - 1];
  selected.classList.add('selected');

  const addProject = document.createElement('button');
  addProject.setAttribute('id', 'add-project');
  addProject.innerHTML = '+ add project';
  projectItems.appendChild(addProject);
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