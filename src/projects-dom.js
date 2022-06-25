import { projectsArray } from './projects-array';

export {refreshProjects};
export {projectBtn};


const refreshProjects = () => {
  const projectItems = document.getElementById('project-items');
  projectItems.innerHTML = '';

  projectsArray.forEach(item => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-button');
    projectBtn.innerHTML = `${item.name}`;
    projectItems.appendChild(projectBtn);
  });

  const buttonArray = document.getElementsByClassName('project-button');
  const currentBtn = buttonArray[buttonArray.length -1];
  currentBtn.classList.add('selected');

  const addProjectBtn = document.createElement('button');
  addProjectBtn.setAttribute('id', 'add-project-button');
  addProjectBtn.innerHTML = '+ add project';
  projectItems.appendChild(addProjectBtn);
};


const projectBtn = (() => {
  function projectBtnClick() {
    const projectBtnArray = document.getElementsByClassName('project-button');
    for (let i = 0; i < projectBtnArray.length; i++) {
      projectBtnArray[i].addEventListener('click', () => {
        for (let j = 0; j < projectBtnArray.length; j++) {
          projectBtnArray[j].classList.remove('selected');
        }
        projectBtnArray[i].classList.add('selected');

      });
    }
  }

  return {projectBtnClick};
})();