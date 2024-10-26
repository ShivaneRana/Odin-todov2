import { defaultDialogLogic } from "../dialog.js";
import { renderNotesList } from "./dom.js";
import { localStorageNotes } from "./storage.js";

export const notesLogic = (function () {
  let notesList = {
  };

  const setNotesList = function () {
    notesList = localStorageNotes.retrieveNotesList();

  };

  const getNotesList = function () {
    console.log("notes list was called");
    return notesList;
  };

  const addToNotesList = function (title, description) {
    if (!alreadyInList(title)) {
      notesList[title] = description;
    }
    localStorageNotes.storeNotesList();
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
    console.log("A note was removed");
    localStorageNotes.storeNotesList();
  };

  const finale = function (container) {
    renderNotesList.render(container);
  };

  // check if the note exist
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
    setNotesList,
  };
})();
