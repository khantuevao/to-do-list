import { projectsArray, addProjectToArray, deleteProjectFromArray } from "./projects-logic";
import { renderProjects, changeSelected } from "./projects-dom";

export {displayController};

const displayController = (() => {
  const selectProject = (() => {
    const projects = document.getElementsByClassName('project');

    function first() {
      if (projects.length === 0) return;
      projects[0].classList.add('selected');
    }
  
    function last() {
      if (projects.length === 0) return;
      const selected = projects[projects.length - 1].classList.add('selected');
    }

    return {first, last};
  })();
  

  function _addProject() {
    const addProjectBtn = document.getElementById('add-project');
    addProjectBtn.addEventListener('click', () => {
      const addFormInput = document.getElementById('add-project-input');
      const name = addFormInput.value;
      addProjectToArray(name);
      renderProjects();
      selectProject.last()
      addFormInput.value = '';
      changeSelected();
    })
  }

  function _deleteProject() {
    const deleteProjectBtn = document.getElementById('delete-project');
    deleteProjectBtn.addEventListener('click', () => {
      deleteProjectFromArray();
      renderProjects();
      selectProject.first();
      changeSelected();
    });
  }

  function checkIfEmpty() {
    if (projectsArray.length === 0) {
      addProjectToArray('default');
      renderProjects();
      selectProject.first();
      _addProject();
      _deleteProject();
    }
  }
 


  return {checkIfEmpty};
})();
