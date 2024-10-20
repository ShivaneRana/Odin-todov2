import "./dom.css";
import { projectLogic } from "./project.js";

// render project list
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

// expands and collapse the main Container
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

// render the dialog box for todo and notes
export const renderDefaultDialog = (function(){

  const dialog = document.createElement("dialog");
  const wrapper = document.createElement("div");
  const buttonHolder = document.createElement("div");
  const showTodo = document.createElement("button");
  const showNotes = document.createElement("button");
  const close = document.createElement("button");
  const clearAll = document.createElement("button");
  const confirm = document.createElement("button");

  // todo files
  const todoArea = document.createElement("div");
  const h1 = document.createElement("h1");
  const tTitle = document.createElement("input");
  const tDate = document.createElement("input");
  const tDescription = document.createElement("textarea");
  const tPriority = document.createElement("h3");
  const low = document.createElement("button");
  const medium = document.createElement("button");
  const high = document.createElement("button");
  const tProject = document.createElement("h3");
  const targetProject = document.createElement("select");

  // notes files
  const notesArea = document.createElement("div");
  const nTitle = document.createElement("input");
  const nDescription = document.createElement("input");

  //variable for controlling the state  
  let isTodoActive = true;
  let isNotesActive = false;
  let priority = ""; 
  
  dialog.classList.add("addDialog");
  wrapper.classList.add("wrapper");
  

  dialog.append(wrapper);
  document.body.append(dialog);

  const showDialog = function(){
    dialog.showModal();
  }

  return {showDialog};
})();