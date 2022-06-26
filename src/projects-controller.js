import { addProject } from "./projects-logic";
import { renderProjects } from "./projects-dom";
import { projectsArray } from "./projects-array";
import { projectFactory } from "./projects-factory";

export {projectController};


const projectController = (() => {
  function _listen() {
  const addProjectBtn = document.getElementById('add-project');
  addProjectBtn.addEventListener('click', () => {
    addProject();
    renderProjects();
    _listen();
  });
}

  function checkIfEmpty() {
    if (projectsArray.length === 0) {
      const defaultProject = projectFactory('default');
      projectsArray.push(defaultProject);
      console.log(projectsArray)

      renderProjects();

      _listen();
    }
  }

  return {checkIfEmpty};
})();