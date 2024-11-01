import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { projectLogic } from "./modules/project.js";
import {
  expandLogic,
  highLightCurrentTab,
  themeLogic,
} from "./modules/uilogic.js";
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

allButton.classList.add("filter-but");
todayButton.classList.add("filter-but");
completedButton.classList.add("filter-but");

document.addEventListener("DOMContentLoaded", () => {
  projectLogic.setList();
  projectLogic.renderList(projectContainer);
  notesLogic.setNotesList();
  allButton.click();
});

allButton.addEventListener("click", (e) => {
  projectLogic.displayProjectListItems(e.target.textContent);
  highLightCurrentTab.displayBut();
});

todayButton.addEventListener("click", (e) => {
  projectLogic.displayProjectListItems(e.target.textContent);
});

completedButton.addEventListener("click", (e) => {
  projectLogic.displayProjectListItems(e.target.textContent);
});

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

export const getMainBar = function () {
  return mainBar;
};

export const clickAllButton = function () {
  allButton.click();
};
