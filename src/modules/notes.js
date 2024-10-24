import { defaultDialogLogic } from "../dialog";
import { renderNotesList } from "./dom";

export const notesLogic = (function () {
  const notesList = {
    Twitter: "https://x.com/shivane_rana",
    Linkedin: "https://www.linkedin.com/in/shivane-rana-77982b2a5/",
    Github: "https://github.com/ShivaneRana",
  };

  const getNotesList = function () {
    console.log("notes list was called");
    return notesList;
  };

  const addToNotesList = function (title, description) {
    if (!alreadyInList(title)) {
      notesList[title] = description;
    }
  };

  const alreadyInList = function (title) {
    if (title in notesList) {
      defaultDialogLogic.closeDialog();
      renderNotesList.noteNotAdded("Notes with similar name already exist");
      return true;
    }
    return false;
  };

  const removeNotesFromList = function (title) {
    delete notesList[title];
    for (let i in notesList) {
      console.log(`${i} =  ${notesList[i]}`);
    }
  };

  const finale = function (container) {
    renderNotesList.render(container);
  };

  const noteExist = function (title) {
    if (title in notesList) {
      return true;
    } else {
      return false;
    }
  };

  return {
    getNotesList,
    addToNotesList,
    removeNotesFromList,
    finale,
    noteExist,
  };
})();
