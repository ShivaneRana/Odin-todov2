import { renderDefaultDialog } from "../dialog.js";
import { getMainBar } from "../index.js";
import "./dom.css";
import { notesLogic } from "./notes.js";
import { projectLogic } from "./project.js";
import { todoLogic } from "./todo.js";

// render project list
export const renderProjectList = (function () {
  const render = function (projectList, container) {
    for (let i in projectList) {
      if (!(i === "All" || i === "Today" || i === "Completed")) {
        const div = document.createElement("div");
        div.classList.add("newProject");
        const button = document.createElement("button");
        button.classList.add("filter-but");
        const remove = document.createElement("button");
        button.textContent = i;
        remove.textContent = "X";
        div.append(button, remove);
        container.append(div);

        remove.addEventListener("click", () => {
          div.remove();
          projectLogic.removeFromList(i);
        });

        // these are for accesing the newly created projects
        button.addEventListener("click", (e) => {
          projectLogic.displayProjectListItems(e.target.textContent);
        });
      }
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

      editButton.addEventListener("click", () => {
        const editDialog = document.createElement("dialog");
        const editWrapper = document.createElement("div");
        const editTitle = document.createElement("input");
        editTitle.setAttribute("placeholder", "new title goes here...");
        editTitle.setAttribute("maxLength", "14");
        editTitle.value = title.textContent;
        const editDecription = document.createElement("textarea");
        editDecription.value = description.textContent;
        editDecription.setAttribute(
          "placeholder",
          "new description goes here...",
        );
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save changes";
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        const header = document.createElement("h1");
        header.textContent = "Edit Notes";

        // apply apply apply....yay
        editDialog.classList.add("editNotes");

        // append append append....yay
        editWrapper.append(
          editTitle,
          editDecription,
          saveButton,
          header,
          closeButton,
        );
        editDialog.append(editWrapper);
        document.body.append(editDialog);
        editDialog.showModal();

        closeButton.addEventListener("click", () => {
          editDialog.close();
        });

        // if u play around the you will find out that if you edit the notes you can have duplicate
        // that is not a bug thats a feature (easter egg)

        saveButton.addEventListener("click", () => {
          title.textContent = editTitle.value;
          description.textContent = editDecription.value;
          editDialog.close();
        });

        editDialog.addEventListener("click", (e) => {
          if (!editWrapper.contains(e.target)) {
            editDialog.close();
          }
        });
      });
    }
  };

  return { render, noteNotAdded };
})();

// this is for rendering object stored inside each object in projectLIst(todo)
export const renderTodo = (function () {
  let currentContainer = null;

  function assignCurrent() {
    currentContainer = getMainBar();
  }

  const render = function (list) {
    assignCurrent();
    currentContainer.textContent = "";
    currentContainer.classList.remove("notesContainer");
    currentContainer.classList.add("todoContainer");
    for (let i in list) {
      const div = document.createElement("div");
      const title = document.createElement("p");
      const detailButton = document.createElement("button");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const dateDate = document.createElement("p");
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");

      title.textContent = `${list[i].title}`;
      detailButton.textContent = `Detail`;
      editButton.textContent = "Edit";
      deleteButton.textContent = "Delete";

      const month = new Date(list[i].date).getMonth() + 1;
      const year = new Date(list[i].date).getFullYear();
      const date = new Date(list[i].date).getDate();

      dateDate.textContent = `${date}-${month}-${year}`;

      // assign all the class

      editButton.classList.add("tEdit");
      detailButton.classList.add("tDetail");
      title.classList.add("tTitle");
      deleteButton.classList.add("tDelete");
      dateDate.classList.add("tDate");
      checkBox.classList.add("tCheckBox");

      div.append(
        checkBox,
        title,
        detailButton,
        dateDate,
        editButton,
        deleteButton,
      );
      currentContainer.append(div);

      deleteButton.addEventListener("click", () => {
        console.log(`${list[i].title} was removed from ${list[i].target}`);
        todoLogic.removeTodoFromList(list[i].target, list[i].title);
      });

      detailButton.addEventListener("click", () => {
        renderTodoDetailDialog(list[i].target, list[i].title);
      });
    }
  };

  const renderTodoDetailDialog = function (target, title) {
    const list = projectLogic.getList();
    const dialog = document.createElement("dialog");
    const wrapper = document.createElement("div");
    const closeButton = document.createElement("button");
    closeButton.textContent = "X";
    const p0 = document.createElement("p");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const header = document.createElement("p");

    header.textContent = "Todo Details";

    const month = new Date(list[target][title].date).getMonth() + 1;
    const date = new Date(list[target][title].date).getDate();
    const year = new Date(list[target][title].date).getFullYear();

    p0.textContent = `Title: ${list[target][title].title}`;
    p1.textContent = `Description: ${list[target][title].description}`;
    p2.textContent = `Due-date: ${date}-${month}-${year}`;
    p3.textContent = `Location: ${list[target][title].target}`;
    p4.textContent = `Priority: ${list[target][title].priority}`;

    dialog.classList.add("detailTodo");

    // append append append append
    wrapper.append(closeButton, header, p0, p1, p2, p3, p4);
    dialog.append(wrapper);
    document.body.append(dialog);
    dialog.showModal();

    dialog.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        dialog.close();
      }
    });

    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  };

  return { render, renderTodoDetailDialog };
})();
