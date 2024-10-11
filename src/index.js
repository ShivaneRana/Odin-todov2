import "./style.css";
import "./asset/Gilroy/stylesheet.css";
import { project } from "./modules/project";

const addNewProject = document.querySelector(".addNewProject");
const projectContainer = document.querySelector(".projectContainer");


document.addEventListener("DOMContentLoaded",() => {
    // render elements present in the project list
    project.displayProject(projectContainer);
});

// add new project
addNewProject.addEventListener("click",() => {
    let result = project.askProjectName();
    if(result === true){
        console.log(project.getList());
        projectContainer.textContent = "";
        project.displayProject(projectContainer,project.getList());
    }else{
        console.log("no changes were made to the project list");
    }
})