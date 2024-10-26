import { notesLogic } from "./notes";
import { projectLogic } from "./project";

export const localStorageProject = (function () {
  // this stores the current projectList
  const storeProjectList = function () {
    console.log("changes to the localStorage for projectList were made");
    localStorage.setItem("projectList", JSON.stringify(projectLogic.getList()));
  };

  const retrieveProjectList = function () {
    console.log("Project list was retrieved from localStorage");
    const returnedList = JSON.parse(localStorage.getItem("projectList"));
    return returnedList || {};
  };

  return { storeProjectList, retrieveProjectList };
})();

export const localStorageNotes = (function () {
  // this stores the current notesList
  console.log("Changes to the localStorage for noteList were made");
  const storeNotesList = function () {
    localStorage.setItem("notesList", JSON.parse(notesLogic.getNotesList()));
  };

  const retrieveNotesList = function () {
    console.log("Notes list was retrieved from the localStorage");
    const returnedList = JSON.parse(localStorage.getItem("notesList"));
    return returnedList || {};
  };

  return { storeNotesList, retrieveNotesList };
})();
