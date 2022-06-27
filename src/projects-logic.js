export {projectsArray, projectFactory, addProjectToArray, getIndex};

const projectsArray = [];

function projectFactory(name) {
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

function getIndex() {
  const selectedIndex = (element) => element.name === (document.querySelector('.selected')).textContent;
  const index = projectsArray.findIndex(selectedIndex);

  return index;
}

