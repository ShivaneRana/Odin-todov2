import { renderNotesList } from "./dom";

export const notesLogic = (function () {
  const notesList = {
    item1: "desctiption1",
    item2: "desctiption2",
    item3: "desctiption3",
    item4: "desctiption4",
    item5: "desctiption1",
    item6: "desctiption2",
    item7: "desctiption3",
    item8: "desctiption4",
  };
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

  return { getNotesList, addToNotesList, removeNotesFromList, finale };
})();
