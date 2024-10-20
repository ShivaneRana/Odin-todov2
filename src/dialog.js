import "./modules/dialog.css";

// render the dialog box for todo and notes
export const renderDefaultDialog = (function () {
  const dialog = document.createElement("dialog");
  const wrapper = document.createElement("div");
  const buttonHolder = document.createElement("div");

  //button for switching between todo and notes tab
  const showTodo = document.createElement("button");
  showTodo.textContent = "-> Todo";
  const showNotes = document.createElement("button");
  showNotes.textContent = "Notes";

  //   these button are common in both tab
  const close = document.createElement("button");
  close.textContent = "Close";
  close.classList.add("close");
  const clearAll = document.createElement("button");
  clearAll.textContent = "Clear All";
  clearAll.classList.add("clearAll");
  const confirm = document.createElement("button");
  confirm.textContent = "Confirm";
  confirm.classList.add("confirm");

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
  targetProject.append(option1);

  // notes files
  const notesArea = document.createElement("div");
  notesArea.classList.add();
  const nh1 = document.createElement("h1");
  nh1.textContent = "Add Notes";

  const nTitle = document.createElement("input");
  const nDescription = document.createElement("input");

  //variable for controlling the state
  let isTodoActive = true;
  let isNotesActive = false;
  let priority = "";

  dialog.classList.add("addDialog");
  wrapper.classList.add("wrapper");
  buttonHolder.classList.add("buttonHolder");
  todoArea.classList.add("todoArea");
  notesArea.classList.add("notesArea");
  notesArea.classList.add("hide");

  dialog.append(wrapper);
  wrapper.append(buttonHolder, todoArea, notesArea);

  todoArea.append(th1, close.cloneNode(true), tTitle);
  todoArea.append(tDate, tDescription, tPriority);
  todoArea.append(tProject, clearAll.cloneNode(true), confirm.cloneNode(true));

  buttonHolder.append(showTodo, showNotes);
  notesArea.append(nh1, close, nTitle, nDescription, clearAll, confirm);
  tPriority.append(low, medium, high);
  tProject.append(targetProject);

  document.body.append(dialog);

  const showDialog = function () {
    dialog.showModal();
  };

  return { showDialog };
})();
