import { projectsArray } from "./projects-array";
import { projectFactory } from "./projects-factory";

export {addProject};


const addProject = () => {
  const name = prompt('enter name');
  if (name === '' || name === null) {
    alert('error');
    return;
  }
  const newProject = projectFactory(name);
  projectsArray.push(newProject);
  console.log(projectsArray);
};

