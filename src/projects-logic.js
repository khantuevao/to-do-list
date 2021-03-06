export {projectsArray, projectFactory, addProjectToArray, getProjectIndex, saveToLocal ,convertFromLocal};


let projectsArray = [];

const projectFactory = (name) => {
  const tasks = [];
  return {name, tasks};
}

function addProjectToArray(name) {
  if (name === '' || name === null) {
    alert('name cannot be empty');
    return;
  }
  const newProject = projectFactory(name);
  projectsArray.push(newProject);
};

function getProjectIndex() {
  const selectedIndex = (element) => element.name === (document.querySelector('.selected')).textContent;
  const index = projectsArray.findIndex(selectedIndex);

  return index;
}

function saveToLocal() {
  localStorage.setItem('projectsArray', JSON.stringify(projectsArray));
}

function convertFromLocal() {
  let getProjects = localStorage.getItem('projectsArray');
  projectsArray = JSON.parse(getProjects);
}