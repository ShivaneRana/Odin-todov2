import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { projectLogic } from "./modules/project";

const expand = document.querySelector(".expand");
const addNewProject = document.querySelector(".addNewProject");
const projectContainer = document.querySelector(".projectContainer");

document.addEventListener("DOMContentLoaded", () => {
  projectLogic.renderProject(projectContainer);
});

expand.addEventListener("click", () => {});

addNewProject.addEventListener("click", () => {
  projectLogic.projectFinale(projectContainer);
});
