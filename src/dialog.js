import { clickAllButton, clickNotes } from "./index.js";
import "./modules/dialog.css";
import { renderProjectInputDialog } from "./modules/dom.js";
import { notesLogic } from "./modules/notes.js";
import { projectLogic } from "./modules/project.js";
import { universalLogic } from "./modules/project.js";

const dialog = document.createElement("dialog");
const wrapper = document.createElement("div");
const buttonHolder = document.createElement("div");

//button for switching between todo and notes tab
const todoButton = document.createElement("button");
todoButton.textContent = "-> Todo";
const notesButton = document.createElement("button");
notesButton.textContent = "Notes";

//  close confirm and clear all button for the notes list
const nClose = document.createElement("button");
nClose.textContent = "Close";
nClose.classList.add("close");
const nClearAll = document.createElement("button");
nClearAll.textContent = "Clear All";
nClearAll.classList.add("clearAll");
const nConfirm = document.createElement("button");
nConfirm.textContent = "Confirm";
nConfirm.classList.add("confirm");

// close confirm and clear all button for the todo list
const tClose = document.createElement("button");
tClose.classList.add("close");
tClose.textContent = "Close";
const tClearAll = document.createElement("button");
tClearAll.classList.add("clearAll");
tClearAll.textContent = "Clear All";
const tConfirm = document.createElement("button");
tConfirm.textContent = "Confirm";
tConfirm.classList.add("confirm");

// todo files
const todoArea = document.createElement("div");
const th1 = document.createElement("h1");
th1.textContent = "Add Todo";
const tTitle = document.createElement("input");
tTitle.setAttribute("placeholder", "add title");
tTitle.classList.add("tTitle");
tTitle.setAttribute("maxLength", "50");
const tDate = document.createElement("input");
tDate.setAttribute("type", "date");
tDate.classList.add("tDate");
const tDescription = document.createElement("textarea");
tDescription.setAttribute("placeholder", "add description");
tDescription.setAttribute("maxLength", "250");
tDescription.classList.add("tDescription");
const tPriority = document.createElement("h3");
tPriority.textContent = "Priority:";
tPriority.classList.add("tPriority");
const low = document.createElement("button");
low.textContent = "Low";
low.classList.add("priorityButton");
const medium = document.createElement("button");
medium.textContent = "Medium";
medium.classList.add("priorityButton");
const high = document.createElement("button");
high.textContent = "High";
high.classList.add("priorityButton");
const tProject = document.createElement("h3");
tProject.textContent = "Project:";
tProject.classList.add("tProject");
const targetProject = document.createElement("select"); //option inside are rendered with renderTargetPRojectList function inside renderDefaultDialog

// notes files
const notesArea = document.createElement("div");
const nh1 = document.createElement("h1");
nh1.textContent = "Add Notes";
const nTitle = document.createElement("input");
nTitle.classList.add("nTitle");
nTitle.setAttribute("maxLength", "13");
nTitle.setAttribute("placeholder", "add title");
const nDescription = document.createElement("textarea");
nDescription.classList.add("nDescription");
nDescription.setAttribute("placeholder", "add description");

function initalize() {
  // adding class to all the elements
  dialog.classList.add("addDialog");
  wrapper.classList.add("wrapper");
  buttonHolder.classList.add("buttonHolder");
  todoArea.classList.add("todoArea");
  notesArea.classList.add("notesArea");
  notesArea.classList.add("hide");

  //append all the elements together
  dialog.append(wrapper);
  wrapper.append(buttonHolder, todoArea, notesArea);

  todoArea.append(th1, tClose, tTitle);
  todoArea.append(tDate, tDescription, tPriority);
  todoArea.append(tProject, tClearAll, tConfirm);

  buttonHolder.append(todoButton, notesButton);
  notesArea.append(nh1, nClose, nTitle, nDescription, nClearAll, nConfirm);
  tPriority.append(low, medium, high);
  tProject.append(targetProject);
  document.body.append(dialog);

  // low,medium,high button funcitonality
  const priorityButtonAll = document.querySelectorAll(".priorityButton");
  priorityButtonAll.forEach((item) => {
    item.addEventListener("click", () => {
      priorityButtonAll.forEach((item) => item.classList.remove("picked"));
      item.classList.add("picked");
      defaultDialogLogic.changePriority(item.textContent);
    });
  });

  // close everything and erase all the input fields
  const closeDialog = function () {
    defaultDialogLogic.clearEverything(); //clear everything on closing dialog box
    dialog.close();
    renderDefaultDialog.rerenderPriority(priorityButtonAll);
  };

  dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      closeDialog();
    }
  });

  tClose.addEventListener("click", () => {
    closeDialog();
    renderDefaultDialog.rerenderPriority(priorityButtonAll);
  });

  nClose.addEventListener("click", () => {
    closeDialog();
  });

  tClearAll.addEventListener("click", () => {
    defaultDialogLogic.clearEverything();
    renderDefaultDialog.rerenderPriority(priorityButtonAll);
  });

  nClearAll.addEventListener("click", () => {
    defaultDialogLogic.clearEverything();
  });

  tConfirm.addEventListener("click", () => {
    const title = tTitle.value.trim();
    const description = tDescription.value.trim();
    const date = new Date(tDate.value); //dont remove the new Date it will break the validation
    const priority = defaultDialogLogic.getPriority();
    const target =
      targetProject.options[targetProject.selectedIndex].textContent;

    if (title === "" || description === "" || priority === "" || isNaN(date)) {
      renderProjectInputDialog.projectNotAdded("Input is incomplete");
    } else {
      const resultingObject = universalLogic.todoFormat(
        title,
        description,
        date,
        priority,
        target,
      );

      if (projectLogic.addObjectToListItems(resultingObject)) {
        closeDialog();
        projectLogic.displayProjectListItems(resultingObject.target);
      }
    }
  });

  nConfirm.addEventListener("click", () => {
    // check if the value being entered is valid or note

    if (nTitle.value === "" || nDescription.value === "") {
      // this method is from project.js
      renderProjectInputDialog.projectNotAdded("Please enter valid input!");
    } else {
      notesLogic.addToNotesList(nTitle.value, nDescription.value);
      closeDialog();
      clickNotes();
    }
  });

  notesButton.addEventListener("click", () => {
    defaultDialogLogic.displayNotes();
    renderDefaultDialog.rerenderPriority(priorityButtonAll);
    defaultDialogLogic.clear();
    notesArea.classList.remove("hide");
    todoArea.classList.add("hide");
  });

  todoButton.addEventListener("click", () => {
    defaultDialogLogic.displayTodo();
    defaultDialogLogic.clear();
    todoArea.classList.remove("hide");
    notesArea.classList.add("hide");
  });
}

// render the dialog box for todo and notes
export const renderDefaultDialog = (function () {
  initalize();

  const showDialog = function () {
    renderTargetProjectList();
    dialog.showModal();
  };

  // add all the avaialable projects as option to the target project list
  const renderTargetProjectList = function () {
    targetProject.textContent = "";

    // add all as a default
    const option = document.createElement("option");
    option.textContent = "All";
    targetProject.append(option);

    // avoid adding add,completed and today as an option
    for (let i in projectLogic.getList()) {
      if (!(i === "All" || i === "Completed" || i === "Today")) {
        const option = document.createElement("option");
        option.textContent = i;
        targetProject.append(option);
      }
    }
  };

  const rerenderPriority = function (list) {
    list.forEach((item) => {
      item.classList.remove("picked");
    });
  };

  return { showDialog, rerenderPriority, renderTargetProjectList };
})();

// this handle logic to a certain degree
export const defaultDialogLogic = (function () {
  let isTodoActive = true;
  let isNotesActive = false;
  let priority = "";

  function clear() {
    if (isTodoActive === true) {
      nTitle.value = "";
      nDescription.value = "";
    } else if (isNotesActive === true) {
      tTitle.value = "";
      tDescription.value = "";
      tDate.value = "";
      targetProject.selectedIndex = 0;
      defaultDialogLogic.changePriority("");
    }
  }

  function clearEverything() {
    nTitle.value = "";
    nDescription.value = "";
    tTitle.value = "";
    tDescription.value = "";
    tDate.value = "";
    targetProject.selectedIndex = 0;
    defaultDialogLogic.changePriority("");
  }

  function changePriority(value) {
    priority = value;
  }

  function getPriority() {
    return priority;
  }

  function displayNotes() {
    isTodoActive = false;
    isNotesActive = true;
    notesButton.textContent = "-> Notes";
    todoButton.textContent = "Todo";
  }

  function displayTodo() {
    isTodoActive = true;
    isNotesActive = false;
    notesButton.textContent = "Notes";
    todoButton.textContent = "-> Todo";
  }

  function finale() {
    renderDefaultDialog.showDialog();
  }

  function closeDialog() {
    dialog.close();
    clearEverything();
  }

  return {
    displayNotes,
    displayTodo,
    clear,
    changePriority,
    getPriority,
    clearEverything,
    finale,
    closeDialog,
  };
})();
