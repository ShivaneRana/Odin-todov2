import { notesLogic } from "./notes";
import { projectLogic } from "./project";

export const localStorageProject = (function () {
  const storeProjectList = function () {
    localStorage.setItem("projectList", JSON.stringify(projectLogic.getList()));
  };

  const retireveProjectList = function () {
    const returnedList = JSON.parse(localStorage.getItem("projectList"));
    return returnedList || {};
  };

  return { storeProjectList, retireveProjectList };
})();

export const localStorageNotes = (function () {
  const storeNotesList = function () {
    localStorage.setItem("notesList", JSON.parse(notesLogic.getNotesList()));
  };

  const retrieveNotesList = function () {
    const returnedList = JSON.parse(localStorage.getItem("notesList"));
    return returnedList || {};
  };

  return { storeNotesList, retrieveNotesList };
})();
