export {displayTasks};

function displayTasks(func) {
  const projects = document.getElementsByClassName('project');
  for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener('click', () => {
      func;
    });
  }
}