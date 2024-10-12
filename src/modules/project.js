import { renderProjectList } from "./dom.js";

export const projectLogic = (function () {
  const projectList = ["gym", "study", "karate"];

  const askProjectName = function () {
    const name = prompt("What is the name of the project?");
    return name;
  };

  const checkProjectName = function (value) {
    if (value === "" || value === undefined || value === null) {
      console.log("No changes were made");
      return false;
    } else {
      console.log("changes were made successfully");
      return true;
    }
  };

  const removeItem = function (value) {
    projectList.splice(value, 1);
    getProjectList();
  };

  const getProjectList = function () {
    console.log("Project List Currently: ");
    console.log(projectList);
    return projectList;
  };

  const pushToProjectList = function (value) {
    projectList.unshift(value);
  };

  const renderProject = function (container) {
    renderProjectList.clearProjectArea(container);
    renderProjectList.render(getProjectList(), container);
  };

  const projectFinale = function (container) {
    const name = askProjectName();
    if (checkProjectName(name)) {
      pushToProjectList(name);
      renderProject(container);
    }
  };

  return { projectFinale, removeItem, renderProject, getProjectList };
})();
