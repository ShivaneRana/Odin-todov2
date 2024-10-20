import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { projectLogic } from "./modules/project.js";
import { expandLogic, themeLogic } from "./modules/uilogic.js";
import { renderDefaultDialog } from "./dialog.js";

const expand = document.querySelector(".expand");
const theme = document.querySelector(".theme");
const sideBar = document.querySelector(".sideBar");
const navBar = document.querySelector(".navBar");
const mainBar = document.querySelector(".mainBar");
const addNewProject = document.querySelector(".addNewProject");
const projectContainer = document.querySelector(".projectContainer");
const addTodoOrNotes = document.querySelector(".add");

document.addEventListener("DOMContentLoaded", () => {
  projectLogic.renderList(projectContainer);
});

expand.addEventListener("click", () => {
  expandLogic.expandFinale(sideBar, navBar, mainBar, expand);
});

theme.addEventListener("click", () => {
  themeLogic.themeFinale(theme);
});

addNewProject.addEventListener("click", () => {
  projectLogic.finale(projectContainer);
});

renderDefaultDialog.showDialog()

addTodoOrNotes.addEventListener("click", () => {
  renderDefaultDialog.showDialog();
});
