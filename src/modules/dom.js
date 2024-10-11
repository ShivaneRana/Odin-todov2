import "./dom.css";

// this is for rendering the elements in project arrary
export const domProjects = (function(){

    const renderProjectList = function(container,arr){
        container.textContent = "";
        arr.forEach((item,index) => {
            const div = document.createElement("div");
            const projectName = document.createElement("button");
            const remove = document.createElement("button");
            remove.textContent = "X";
            projectName.textContent = item;
            div.classList.add("newProject");
            div.append(projectName,remove);
            container.append(div);

            remove.addEventListener("click",() => {
                arr.splice(index,1);
                renderProjectList(container,arr);
                console.log("current state of the array:");
                console.log(arr);
            });
        })
    }

    return {renderProjectList};
})()