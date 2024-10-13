import { renderProjectList } from "./dom.js";

export const projectLogic = (function () {
  const projectList = {
    gym:{
      
    },
    study:{

    },
    houseChore:{

    },
  };

  const getList = function(){
    console.log("Current State of the Project List~");
    for(let i of Object.values(projectList)){
      console.log(i);
    }
    return projectList;
  }

  const removeFromList = function(){

  }

  const askForInpupt = function(){
    cons
  }

  const checkInput = function(){

  }

  const addToList = function(){

  }

  const renderList = function(){

  }

  // this will call them accordingly
  const finale = function(){

  }

  return {getList};
})();
