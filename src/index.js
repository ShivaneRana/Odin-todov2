import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { projectLogic } from "./modules/project.js";
import { expandLogic } from "./modules/uilogic.js";

const expand = document.querySelector(".expand");
const sideBar = document.querySelector(".sideBar");
const navBar = document.querySelector(".navBar");
const mainBar = document.querySelector(".mainBar");
const addNewProject = document.querySelector(".addNewProject");
const projectContainer = document.querySelector(".projectContainer");

document.addEventListener("DOMContentLoaded", () => {});

expand.addEventListener("click", () => {
  expandLogic.expandFinale(sideBar, navBar, mainBar, expand);
});

addNewProject.addEventListener("click", () => {
  projectLogic.finale();
});
