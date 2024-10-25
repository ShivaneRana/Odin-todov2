import { renderProjectInputDialog, renderProjectList } from "./dom.js";

export const projectLogic = (function () {
  const projectList = {
    All: {},
    Completed: {},
    Today: {},
    Gym: {},
    Study: {},
    HouseChore: {},
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

  return { finale, removeFromList, renderList, getList };
})();
