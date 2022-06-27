import { projectsArray, addProjectToArray, getIndex } from "./projects-logic";
import { renderProjects, changeSelected } from "./projects-dom";
import { renderTasks } from "./tasks-dom";

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
      displayTasks();

    })
  }

  function _deleteProject() {
    const deleteProjectBtn = document.getElementById('delete-project');
    deleteProjectBtn.addEventListener('click', () => {
      projectsArray.splice(getIndex(), 1);
      renderProjects();
      selectProject.first();
      changeSelected();
      displayTasks();
    });
  }

  function displayTasks() {
    renderTasks(getIndex());
    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', () => {
        renderTasks(getIndex());
      });
    }
  }





  function checkIfEmpty() {
    if (projectsArray.length === 0) {
      addProjectToArray('default');
      renderProjects();
      selectProject.first();
      _addProject();
      _deleteProject();

      const defaultTaskOne = {
        date: '27/09',
        name: 'get tits from school',
        checked: false
      }

      const defaultTaskTwo = {
        date: '03/05',
        name: 'feed the kitty',
        checked: true
      }

      projectsArray[0].tasks.push(defaultTaskOne);
      projectsArray[0].tasks.push(defaultTaskTwo);

      displayTasks();
    }
  }
 


  return {checkIfEmpty};
})();
