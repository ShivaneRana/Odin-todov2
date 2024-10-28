import { projectLogic } from "./project";

export const todoLogic = (function () {
  const removeTodoFromList = function (listObjectName, todoName) {
    const list = projectLogic.getList();
    delete list[listObjectName][todoName];
    projectLogic.displayProjectListItems(listObjectName);
  };

  return { removeTodoFromList };
})();
