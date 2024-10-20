import "./modules/dialog.css";

const dialog = document.createElement("dialog");
const wrapper = document.createElement("div");
const buttonHolder = document.createElement("div");

//button for switching between todo and notes tab
const todoButton = document.createElement("button");
todoButton.textContent = "-> Todo";
const notesButton = document.createElement("button");
notesButton.textContent = "Notes";

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
low.classList.add(".priorityButton");
const medium = document.createElement("button");
medium.textContent = "Medium";
medium.classList.add(".priorityButton");
const high = document.createElement("button");
high.textContent = "High";
high.classList.add(".priorityButton");
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
nTitle.classList.add("nTitle");
const nDescription = document.createElement("input");
nDescription.classList.add("nDescription");

function initalize(){
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
    
    todoArea.append(th1, close.cloneNode(true), tTitle);
    todoArea.append(tDate, tDescription, tPriority);
    todoArea.append(tProject, clearAll.cloneNode(true), confirm.cloneNode(true));
    
    buttonHolder.append(todoButton, notesButton);
    notesArea.append(nh1, close, nTitle, nDescription, clearAll, confirm);
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

  return { showDialog };
})();


export const defaultDialogLogic = (function () {
  let isTodoActive = true;
  let isNotesActive = false;
  let priority = "";

  function displayNotes(){
    isNotesActive = true;
	isTodoActive = false;
  }

  function displayTodo(){
    isTodoActive = true;
    isNotesActive = false;
  }

  function situationBasedRender(){
    if(isNotesActive === false && isTodoActive === true){

    }else if (isTodoActive === true && isNotesActive === false){

    } 
  }

  function finale(){
    renderDefaultDialog.showDialog();
  }

  return { displayNotes,displayTodo,situationBasedRender,finale};
})();
