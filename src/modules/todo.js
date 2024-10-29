import { renderTodo } from "./dom";
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

  const changeTodo = function (target, title) {
    const list = projectLogic.getList();

    const tit = list[target][title].title;
    const description = list[target][title].description;
    const date = list[target][title].date;
    const priority = list[target][title].priority;

    renderTodo.renderTodoEditDialog(tit, description, date, priority);
  };

  return { removeTodoFromList, changeTodo };
})();
