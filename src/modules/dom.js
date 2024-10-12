import "./dom.css";
import { projectLogic } from "./project";

export const renderProjectList = (function () {
  const render = function (list, container) {
    list.forEach((item, index) => {
      const div = document.createElement("div");
      const projectName = document.createElement("button");
      const remove = document.createElement("button");
      remove.textContent = "X";
      projectName.textContent = item;

      div.classList.add("newProject");
      div.append(projectName, remove);
      container.append(div);

      remove.addEventListener("click", () => {
        projectLogic.removeItem(index);
        container.textContent = "";
        render(list, container);
      });
    });
  };

  const clearProjectArea = function (container) {
    container.textContent = "";
  };

  return { render, clearProjectArea };
})();
