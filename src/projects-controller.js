import { addProject } from "./projects-logic";
import { renderProjects } from "./projects-dom";
import { projectsArray } from "./projects-array";
import { projectFactory } from "./projects-factory";
import { changeSelected } from "./projects-dom";
import { getIndex, renderTasks } from "./tasks";

export {displayController};


const displayController = (() => {
  function _addProjectListen() {
    const addProjectBtn = document.getElementById('add-project');
    addProjectBtn.addEventListener('click', () => {
      addProject();
      renderProjects();
      changeSelected();
      showTasks();
      projectListen();
      _addProjectListen();
    });
  }

  function showTasks() {
    const index = getIndex();
    renderTasks(index);
  }

  function projectListen() {
    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', () => {
        showTasks();
      });
    }
  }

  function checkIfEmpty() {
    if (projectsArray.length === 0) {
      const defaultProject = projectFactory('default');
      projectsArray.push(defaultProject);
      console.log(projectsArray)

      const taskOne = {
        date: '27/09',
        name: 'feed the kitty',
        checked: false
      }
      projectsArray[0].tasks.push(taskOne);

      const taskTwo = {
        date: '3/02',
        name: 'get tits from school',
        checked: false
      }
      projectsArray[0].tasks.push(taskTwo);

      renderProjects();

      showTasks();

      _addProjectListen();
    }
  }

  return {checkIfEmpty};
})();

