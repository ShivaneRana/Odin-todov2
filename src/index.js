import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { projectLogic } from "./modules/project.js";
import { expandLogic, themeLogic } from "./modules/uilogic.js";
import { defaultDialogLogic } from "./dialog.js";
import { renderProjectInputDialog } from "./modules/dom.js";
import { notesLogic } from "./modules/notes.js";

const expandButton = document.querySelector(".expand");
const themeButton = document.querySelector(".theme");
const sideBar = document.querySelector(".sideBar");
const navBar = document.querySelector(".navBar");
const mainBar = document.querySelector(".mainBar");
const addNewProjectButton = document.querySelector(".addNewProject");
const projectContainer = document.querySelector(".projectContainer");
const addTodoOrNotesButton = document.querySelector(".add");
const notesButton = document.querySelector(".notes");
const allButton = document.querySelector(".all");
const todayButton = document.querySelector(".today");
const completedButton = document.querySelector(".completed");

document.addEventListener("DOMContentLoaded", () => {
  projectLogic.renderList(projectContainer);
});

allButton.addEventListener("click", () => {});

todayButton.addEventListener("click", () => {});

completedButton.addEventListener("click", () => {});

expandButton.addEventListener("click", () => {
  expandLogic.expandFinale(sideBar, navBar, mainBar, expandButton);
});

themeButton.addEventListener("click", () => {
  themeLogic.themeFinale(themeButton);
});

// add new projects
addNewProjectButton.addEventListener("click", () => {
  renderProjectInputDialog.render(projectContainer);
});

// shows dialog box to add todo or notes
addTodoOrNotesButton.addEventListener("click", () => {
  defaultDialogLogic.finale();
});

// display notes
notesButton.addEventListener("click", () => {
  notesLogic.finale(mainBar);
});

// used for displaying notes screen after pressing confirm adding notes dialog
export const clickNotes = function () {
  notesButton.click();
};
