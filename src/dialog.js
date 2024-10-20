import "./modules/dialog.css";

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
    buttonHolder.classList.add("buttonHolder");
    todoArea.classList.add("todoArea");
    notesArea.classList.add("notesArea");
    notesArea.classList.add("hide");

    
  
    dialog.append(wrapper);
    wrapper.append(buttonHolder);
    wrapper.append(todoArea);
    wrapper.append(notesArea);
    document.body.append(dialog);
  
    const showDialog = function(){
      dialog.showModal();
    }
  
    return {showDialog};
  })();