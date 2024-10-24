import "./dom.css";
import { notesLogic } from "./notes.js";
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

  function clear(container) {
    container.textContent = "";
  }

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

// this is for the rendering of dialog box for taking project name from the user
export const renderProjectInputDialog = (function () {
  const dialog = document.createElement("dialog");
  const wrapper = document.createElement("div");
  const projectName = document.createElement("input");
  const closeButton = document.createElement("button");
  const confirmButton = document.createElement("button");
  const clearButton = document.createElement("button");

  projectName.setAttribute("placeholder", "enter project name....");
  closeButton.textContent = "X";
  confirmButton.textContent = "Confirm";
  clearButton.textContent = "Clear";

  //adding classList
  dialog.classList.add("projectInputDialog");

  // appending element
  wrapper.append(closeButton, projectName, clearButton, confirmButton);
  dialog.append(wrapper);
  document.body.append(dialog);

  // adding functionality to dialog box
  dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      projectName.value = "";
      dialog.close();
    }
  });

  closeButton.addEventListener("click", () => {
    projectName.value = "";
    dialog.close();
  });

  clearButton.addEventListener("click", () => {
    projectName.value = "";
  });

  let currentContainer = null;

  confirmButton.addEventListener("click", () => {
    dialog.close();
    projectLogic.finale(currentContainer, projectName.value);
    projectName.value = "";
  });

  const closeDialog = function () {
    closeButton.click();
  };

  const projectNotAdded = function (message) {
    dialog.close();
    notAddedDialog(message);
  };

  function render(container) {
    currentContainer = container;
    dialog.showModal();
  }

  return { render, projectNotAdded, closeDialog };
})();

// render alert message on not being able to add notes or project
const notAddedDialog = function (message) {
  const alertDialog = document.createElement("dialog");
  const alertWrapper = document.createElement("div");
  const alertH1 = document.createElement("h1");
  alertH1.textContent = message;
  alertWrapper.append(alertH1);
  alertDialog.append(alertWrapper);
  document.body.append(alertDialog);
  alertDialog.classList.add("inputError");
  alertDialog.showModal();

  alertDialog.addEventListener("click", (e) => {
    if (!alertWrapper.contains(e.target)) {
      alertDialog.close();
    }
  });
};

// this is for rendering notesList
export const renderNotesList = (function () {
  let currentContainer = null;

  const applyNotesClass = function () {
    currentContainer.classList.remove("todoContainer");
    currentContainer.classList.add("notesContainer");
  };

  const clearContainer = function () {
    currentContainer.textContent = "";
  };

  const noteNotAdded = function (message) {
    notAddedDialog(message);
  };

  const render = function (container) {
    currentContainer = container;
    applyNotesClass();
    clearContainer();
    const list = notesLogic.getNotesList();
    for (let i in list) {
      const div = document.createElement("div");
      const title = document.createElement("h1");
      title.textContent = i;
      const description = document.createElement("p");
      description.textContent = list[i];
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("editBut");
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.classList.add("deleteBut");
      div.append(title, description, editButton, removeButton);
      currentContainer.append(div);

      removeButton.addEventListener("click", () => {
        console.log(`${i} have been removed`);
        notesLogic.removeNotesFromList(i);
        div.remove();
      });
    }
  };

  return { render, noteNotAdded };
})();
