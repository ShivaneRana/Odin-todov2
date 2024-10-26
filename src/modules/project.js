import { renderProjectInputDialog, renderProjectList } from "./dom.js";
import { localStorageProject } from "./storage.js";

export const projectLogic = (function () {
  let projectList = {
    All: {},
    Completed: {},
    Today: {},
    Gym: {},
    Study: {},
    HouseChore: {},
  };

  const setList = function () {
    console.log("ProjectList was set");
    projectList = localStorageProject.retrieveProjectList();
  };

  const getList = function () {
    console.log("projectList was called");
    return projectList;
  };

  const removeFromList = function (key) {
    delete projectList[key];
    console.log(`${key} has been removed`);
    localStorageProject.storeProjectList();
  };

  const checkInput = function (name) {
    if (
      name === "all" ||
      name === "ALL" ||
      name === "completed" ||
      name === "Completed" ||
      name === "Today" ||
      name === "today"
    ) {
      renderProjectInputDialog.closeDialog();
      renderProjectInputDialog.projectNotAdded(
        "This will break the program so dont bother writting it",
      );
      return false;
    } else if (!(name === "" || name === null || name === undefined)) {
      let exist = Object.keys(projectList).includes(name);
      if (exist !== true) {
        console.log("value added to projectList");
        return true;
      } else {
        renderProjectInputDialog.closeDialog();
        renderProjectInputDialog.projectNotAdded(
          "Project with same name already exist!",
        );
        return false;
      }
    } else {
      renderProjectInputDialog.closeDialog();
      renderProjectInputDialog.projectNotAdded("No project Name was provided!");
      return false;
    }
  };

  const addToList = function (name) {
    projectList[name] = {};
    localStorageProject.storeProjectList();
  };

  const renderList = function (container) {
    renderProjectList.clear(container);
    renderProjectList.render(projectList, container);
  };

  const finale = function (container, projectName) {
    if (checkInput(projectName)) {
      addToList(projectName);
      getList();
      renderList(container);
    }
  };

  return { finale, removeFromList, renderList, getList, setList };
})();

// this logic is shared amound all the todo container like all,completed,today
// also all the new created projects
export const universalLogic = (function () {
  let currentList;

  // this is used on all the todos
  const todoFormat = function (title, description, date, target, priority) {
    return {
      title: title,
      description: description,
      date: date,
      target: target,
      priority,
      priority,
      completed: false,
    };
  };

  return { todoFormat };
})();
