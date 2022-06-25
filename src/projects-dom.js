import { projectsArray } from './projects-array';

export {renderProjects};
export {projectBtn};


const renderProjects = () => {
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
  const _projectBtnArray = document.getElementsByClassName('project-button');

  function projectBtnClick() {
    for (let i = 0; i < _projectBtnArray.length; i++) {
      _projectBtnArray[i].addEventListener('click', () => {
        for (let j = 0; j < _projectBtnArray.length; j++) {
          _projectBtnArray[j].classList.remove('selected');
        }
        _projectBtnArray[i].classList.add('selected');
      });
    }
  }

  return {projectBtnClick};
})();