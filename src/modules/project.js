import { domProjects } from "./dom";

export const project = (function(){

    const projectList = ["gym","diet","study"];

    const getList = function(){
        return projectList;
    }

    const addToList = function(value){
        projectList.unshift(value);
    }

    const askProjectName = function(){
        const name = prompt("Enter the name of the projects");
        if(name !== null && name !== undefined && name !== "" && !(projectList.includes(name))){
            addToList(name);
            return true;
        }
        return false;
    }

    const displayProject = function(container){
        domProjects.renderProjectList(container,projectList);
        console.log("domPRoject was used");
    }


    return {getList,addToList,askProjectName,displayProject};

})();
