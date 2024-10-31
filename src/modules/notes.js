import { defaultDialogLogic } from "../dialog.js";
import { renderNotesList } from "./dom.js";
import { localStorageNotes } from "./storage.js";

export const notesLogic = (function () {
  let notesList = {};

  const setNotesList = function () {
    notesList = { ...localStorageNotes.retrieveNotesList() };
  };

  const getNotesList = function () {
    return notesList;
  };

  const addToNotesList = function (obj) {
    if (!alreadyInList(obj.initialTitle)) {
      notesList[obj.initialTitle] = obj;
      localStorageNotes.storeNotesList();
      console.log(notesList);
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
