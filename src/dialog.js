import "./modules/dialog.css";

const dialog = document.createElement("dialog");
const wrapper = document.createElement("div");
const buttonHolder = document.createElement("div");

//button for switching between todo and notes tab
const todoButton = document.createElement("button");
todoButton.textContent = "-> Todo";
const notesButton = document.createElement("button");
notesButton.textContent = "Notes";

//   these button are common in both tab but different name for various reason
const nClose = document.createElement("button");
nClose.textContent = "Close";
nClose.classList.add("close");
const nClearAll = document.createElement("button");
nClearAll.textContent = "Clear All";
nClearAll.classList.add("clearAll");
const nConfirm = document.createElement("button");
nConfirm.textContent = "Confirm";
nConfirm.classList.add("confirm");

const tClose = document.createElement("button");
tClose.classList.add("close");
tClose.textContent = "Close";
const tClearAll = document.createElement("button");
tClearAll.classList.add("clearAll");
tClearAll.textContent = "Clear All";
const tconfirm = document.createElement("button");
tconfirm.textContent = "Confirm";
tconfirm.classList.add("confirm");

// todo files
const todoArea = document.createElement("div");
const th1 = document.createElement("h1");
th1.textContent = "Add Todo";
const tTitle = document.createElement("input");
tTitle.setAttribute("placeholder", "add title");
tTitle.classList.add("tTitle");
const tDate = document.createElement("input");
tDate.setAttribute("type", "date");
tDate.classList.add("tDate");
const tDescription = document.createElement("textarea");
tDescription.setAttribute("placeholder", "add description");
tDescription.classList.add("tDescription");
const tPriority = document.createElement("h3");
tPriority.textContent = "Priority:";
tPriority.classList.add("tPriority");
const low = document.createElement("button");
low.textContent = "Low";
const medium = document.createElement("button");
medium.textContent = "Medium";
const high = document.createElement("button");
high.textContent = "High";
const tProject = document.createElement("h3");
tProject.textContent = "Project:";
tProject.classList.add("tProject");
const targetProject = document.createElement("select");
const option1 = document.createElement("option");
option1.textContent = "All";
const option2 = document.createElement("option");
option2.textContent = "project1";
const option3 = document.createElement("option");
option3.textContent = "project2";
const option4 = document.createElement("option");
option4.textContent = "project3";
targetProject.append(option1, option2, option3, option4);

// notes files
const notesArea = document.createElement("div");
const nh1 = document.createElement("h1");
nh1.textContent = "Add Notes";
const nTitle = document.createElement("input");
nTitle.classList.add("nTitle");
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
  todoArea.append(tProject, tClearAll, tconfirm);

  buttonHolder.append(todoButton, notesButton);
  notesArea.append(nh1, nClose, nTitle, nDescription, nClearAll, nConfirm);
  tPriority.append(low, medium, high);
  tProject.append(targetProject);
  document.body.append(dialog);
}

// render the dialog box for todo and notes
export const renderDefaultDialog = (function () {
  initalize();

  const showDialog = function () {
    dialog.showModal();
  };

  const closeDialog = function () {
    defaultDialogLogic.clearEverything();
    dialog.close();
  };

  dialog.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      closeDialog();
    }
  });

  tClose.addEventListener("click", () => {
    closeDialog();
  });

  nClose.addEventListener("click", () => {
    closeDialog();
  });

  tClearAll.addEventListener("click", () => {
    defaultDialogLogic.clearEverything();
  });

  nClearAll.addEventListener("click", () => {
    defaultDialogLogic.clearEverything();
  });

  notesButton.addEventListener("click", () => {
    defaultDialogLogic.displayNotes();
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

  return { showDialog };
})();

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
    }
  }

  function clearEverything() {
    nTitle.value = "";
    nDescription.value = "";
    tTitle.value = "";
    tDescription.value = "";
    tDate.value = "";
    targetProject.selectedIndex = 0;
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
  return { displayNotes, displayTodo, clear, clearEverything, finale };
})();
