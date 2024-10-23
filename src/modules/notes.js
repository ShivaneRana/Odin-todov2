import { renderNotesList } from "./dom";

export const notesLogic = (function () {
  const notesList = {};

  const getNotesList = function () {
    console.log("notes list was called");
    return notesList;
  };

  const addToNotesList = function (title, description) {
    notesList[title] = description;
  };

  const removeNotesFromList = function (title) {
    delete notesList[title];
  };

  const finale = function (container) {
    renderNotesList.render(container);
  };

  const noteExist = function (title) {
    if (title in notesList) {
      renderNotesList.alreadyExist();
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
