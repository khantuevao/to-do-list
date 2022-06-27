export {projectsArray, projectFactory, addProjectToArray, getProjectIndex};

const projectsArray = [];

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

