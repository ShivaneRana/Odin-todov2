// export const defaultDialog = (function(){
    
// })();

const todoButton = document.querySelector(".showTodo");
const notesButton = document.querySelector(".showNotes");
const todoArea = document.querySelector(".todoArea");
const notesArea = document.querySelector(".notesArea");
const addDialog = document.querySelector(".addDialog");
const wrapper = document.querySelector(".wrapper");
const close = document.querySelector(".close");
const clearAll = document.querySelectorAll(".clearAll");
const confirm = document.querySelectorAll(".confirm");


// these are all for todo List
const tTitle = document.querySelector(".tTitle");
const tDescription = document.querySelector(".tDescription");
const tDate = document.querySelector(".tDate");
const priorityButton = document.querySelectorAll(".priorityButton");
const targetProject = document.querySelector(".targetProject");

// these are all for notes List
const nTitle = document.querySelector(".nTitle");
const nDescription = document.querySelector(".nDescription");

addDialog.showModal();
let isTodoActive = true;
let isNotesActive = false;
let priority = "";


notesButton.addEventListener("click",() => {
    notesSelected();
});

todoButton.addEventListener("click",() => {
    todoSelected();
});

// function for when todo is selected
const todoSelected = function(){
    isNotesActive = false;
    isTodoActive = true;
    clear();
	notesButton.textContent = "Notes";
	todoButton.textContent = "-> Todo";
	todoArea.classList.remove("hide");
	notesArea.classList.add("hide");
}


// function for when notes is selected
const notesSelected = function(){
	isNotesActive = true;
	isTodoActive = false;
    clear();
	notesButton.textContent = "-> Notes";
	todoButton.textContent = "Todo";
	todoArea.classList.add("hide");
	notesArea.classList.remove("hide");
}

addDialog.addEventListener("click",(e) => {
    if(!(wrapper.contains(e.target))){
        closeDialog();
    }
})

close.addEventListener("click",() => {
    clearEverything();
    closeDialog();
})

// close the dialog
const closeDialog = function(){      
    clearEverything();
    addDialog.close();
}

// clear based on the currently selected 
const clear = function(){
    if(isTodoActive === true){    
        console.log("todos cleared");
        tTitle.value = "";
        tDescription.value = "";
        tDate.value = "";
        targetProject.selectedIndex = 0;
        priority = "";
        priorityButton.forEach(item => {
            item.classList.remove("picked");
            item.classList.add("unpicked");
        })
    }else if(isNotesActive === true){
        console.log("notes cleared");
        nTitle.value = "";
        nDescription.value = "";
    }
}

clearAll.forEach(item => {
    item.addEventListener("click",() => {
        clear();
    })
})

// this clear everything regardless of what is selected currently
const clearEverything = function(){
    tTitle.value = "";
    tDescription.value = "";
    tDate.value = "";
    targetProject.selectedIndex = 0;
    priority = "";
    nTitle.value = "";
    nDescription.value = "";       
    priorityButton.forEach(item => {
        item.classList.remove("picked");
        item.classList.add("unpicked");
    })
}

priorityButton.forEach(item => {
    item.classList.add("unpicked");
    item.addEventListener("click",() => {
        priority = item.textContent;
        console.log(priority);
        priorityButton.forEach(item => {
            if(item.textContent !== priority){
                item.classList.remove("picked");
                item.classList.add("unpicked");
            }else if(item.textContent === priority){
                item.classList.remove("unpicked");
                item.classList.add("picked");
            }
        })
    })
})

const show = document.querySelector(".show");
show.addEventListener("click",() => {
    addDialog.showModal();
})