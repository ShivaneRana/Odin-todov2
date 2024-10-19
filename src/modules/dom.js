import "./dom.css";
import { projectLogic } from "./project.js";
import { defaultDialogLogic } from "./dialog.js";

export const renderProjectList = (function () {
  const render = function (projectList, container) {
    for (let i in projectList) {
      const div = document.createElement("div");
      div.classList.add("newProject");
      const button = document.createElement("button");
      const remove = document.createElement("button");
      button.textContent = i;
      remove.textContent = "X";
      div.append(button, remove);
      container.append(div);

      remove.addEventListener("click", () => {
        div.remove();
        projectLogic.removeFromList(i);
      });
    }
  };

  const clear = function (container) {
    container.textContent = "";
  };

  return { render, clear };
})();

export const renderExpand = (function () {
  const expand = function (sideBar, navBar, mainBar, button) {
    button.textContent = "Collapse";
    sideBar.classList.add("hide");
    navBar.classList.add("newNav");
    mainBar.classList.add("newMain");
  };

  const collapse = function (sideBar, navBar, mainBar, button) {
    button.textContent = "Expand";
    sideBar.classList.remove("hide");
    navBar.classList.remove("newNav");
    mainBar.classList.remove("newMain");
  };

  return { expand, collapse };
})();
