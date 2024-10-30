import { projectLogic } from "./project";
import { localStorageProject } from "./storage";

export const todoLogic = (function () {
  const removeTodoFromList = function (listObjectName, todoName) {
    const list = projectLogic.getList();
    delete list[listObjectName][todoName];

    // save all changes
    localStorageProject.storeProjectList();

    // display new changes
    projectLogic.displayProjectListItems(listObjectName);
  };

  const changeTodo = function (target, title) {};

  return { removeTodoFromList, changeTodo };
})();
