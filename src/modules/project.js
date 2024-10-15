import { renderProjectList } from "./dom.js";

export const projectLogic = (function () {
  const projectList = {
    gym: {},
    study: {},
    houseChore: {},
  };

  const getList = function () {
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
    const name = prompt("What is the name of the project?");
    return name;
  };

  const checkInput = function (name) {
    let exist = Object.keys(projectList).includes(name);
    if (exist === true) {
      console.log("key already exist in the list");
      return false;
    } else {
      if (name !== "" || name !== null || name !== undefined) {
        console.log("key was registered to the list");
        return true;
      } else {
        console.log("key is invalid");
        return false;
      }
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

  return { finale, removeFromList, renderList };
})();
