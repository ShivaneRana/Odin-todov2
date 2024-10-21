import { renderProjectInputDialog, renderProjectList } from "./dom.js";

export const projectLogic = (function () {
  const projectList = {
    gym: {},
    study: {},
    houseChore: {},
  };

  const getList = function () {
    console.log("getlist was called");
    for (let i in projectList) {
      console.log(`${i}`, projectList[i]);
    }

    return projectList;
  };

  const removeFromList = function (key) {
    delete projectList[key];
    console.log(`${key} has been removed`);
    getList();
  };

  const askForInput = function () {
    const name = prompt("Enter project name");
    return name;
  };

  const checkInput = function (name) {
    if (!(name === "" || name === null || name === undefined)) {
      let exist = Object.keys(projectList).includes(name);
      if (exist !== true) {
        console.log("value added to projectList");
        return true;
      } else {
        console.log("value already exist");
        return false;
      }
    } else {
      console.log("value is invalid");
      return false;
    }
  };

  const addToList = function (name) {
    projectList[name] = {};
  };

  const renderList = function (container) {
    renderProjectList.clear(container);
    renderProjectList.render(projectList, container);
  };

  const finale = function (container) {
    const projectName = askForInput();
    if (checkInput(projectName)) {
      addToList(projectName);
      getList();
      renderList(container);
    }
  };

  return { finale, removeFromList, renderList, getList };
})();
