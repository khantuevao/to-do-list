import { projectsArray, addProjectToArray, getProjectIndex } from "./projects-logic";
import { renderProjects, changeSelected } from "./projects-dom";
import { clearTaskInput, renderTasks, showContents } from "./tasks-dom";
import { addTaskToArray, changeColor, renderChecked, taskChangeChecked } from "./tasks-logic";

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
      const addProjectInput = document.getElementById('add-project-input');
      const name = addProjectInput.value;
      addProjectToArray(name);
      renderProjects();
      selectProject.last()
      addProjectInput.value = '';
      changeSelected();
      displayTasks();
      changeColor(getProjectIndex());
      _deleteTask(getProjectIndex());
      renderChecked(getProjectIndex());
      taskChangeChecked(getProjectIndex());
      showContents();
    })
  }

  function _deleteProject() {
    const deleteProjectBtn = document.getElementById('delete-project');
    deleteProjectBtn.addEventListener('click', () => {
      projectsArray.splice(getProjectIndex(), 1);
      renderProjects();
      selectProject.first();
      changeSelected();
      if (projectsArray.length === 0) {
        const taskItems = document.getElementById('task-items');
        taskItems.innerHTML = '';
      } else {
        displayTasks();
        changeColor(getProjectIndex());
        _deleteTask(getProjectIndex());
        renderChecked(getProjectIndex());
        taskChangeChecked(getProjectIndex());
        showContents();
      }
    });
  }

  function _addTask() {
    const addTaskBtn = document.getElementById('add-task');
    addTaskBtn.addEventListener('click', () => {
      addTaskToArray(getProjectIndex());
      displayTasks();
      changeColor(getProjectIndex());
      _deleteTask(getProjectIndex());
      clearTaskInput();
      renderChecked(getProjectIndex());
      taskChangeChecked(getProjectIndex());
      showContents();
    })
  }

  function _deleteTask(index) {
    const deleteTaskBtns = document.getElementsByClassName('delete-task');
    for (let i = 0; i < deleteTaskBtns.length; i++) {
      deleteTaskBtns[i].addEventListener('click', () => {
        projectsArray[index].tasks.splice(i, 1);
        displayTasks();
        changeColor(getProjectIndex());
        _deleteTask(getProjectIndex());
        renderChecked(getProjectIndex());
        taskChangeChecked(getProjectIndex());
        showContents();
      });
    }
  }

  function displayTasks() {
    renderTasks(getProjectIndex());
    const projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', () => {
        renderTasks(getProjectIndex());
        changeColor(getProjectIndex());
        _deleteTask(getProjectIndex());
        renderChecked(getProjectIndex());
        taskChangeChecked(getProjectIndex());
        showContents();
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
        date: '2019-09-27',
        name: 'get tits from school',
        priority: '1',
        description: 'a brief explanation of the task',
        checked: false
      }

      const defaultTaskTwo = {
        date: '2018-05-03',
        name: 'feed the kitty',
        description: 'kitty is important, feed the kitty',
        priority: '4',
        checked: true
      }

      projectsArray[0].tasks.push(defaultTaskOne);
      projectsArray[0].tasks.push(defaultTaskTwo);

      displayTasks();
      _deleteTask(getProjectIndex());
      _addTask();
      changeColor(getProjectIndex());
      renderChecked(getProjectIndex());
      taskChangeChecked(getProjectIndex());
      showContents();
    }
  }
 


  return {checkIfEmpty};
})();
