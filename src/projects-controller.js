import { projectsArray, addProjectToArray, deleteProjectFromArray } from "./projects-logic";
import { renderProjects, changeSelected } from "./projects-dom";

export {displayController};

const displayController = (() => {
  function _selectFirstProject() {
    const projects = document.getElementsByClassName('project');
    if (projects.length === 0) return;
    projects[0].classList.add('selected');
  }

  function _addProjectListener() {
    const addProjectBtn = document.getElementById('add-project');
    addProjectBtn.addEventListener('click', () => {
      const addFormInput = document.getElementById('add-project-input');
      const name = addFormInput.value;
      addProjectToArray(name);
      renderProjects();
      
      const projects = document.getElementsByClassName('project');
      const selected = projects[projects.length - 1].classList.add('selected');
      addFormInput.value = '';
      changeSelected();
    })
  }

  function _deleteProject() {
    const deleteProjectBtn = document.getElementById('delete-project');
    deleteProjectBtn.addEventListener('click', () => {
      deleteProjectFromArray();
      renderProjects();
      _selectFirstProject();
      changeSelected();

    });
    
  }

  function checkIfEmpty() {
    if (projectsArray.length === 0) {
      addProjectToArray('default');
      renderProjects();
      _selectFirstProject();
      _addProjectListener();
      _deleteProject();
    }
  }
 


  return {checkIfEmpty};
})();
