export const notesLogic = (function () {
  const notesList = {
    item1: "desctiption1",
    item2: "desctiption1",
  };
  const getNotesList = function () {
    for (let i in notesList) {
      console.log(`${i} : ${notesList[i]}`);
    }
    return notesList;
  };

  const addToNotesList = function (title, description) {
    notesList[title] = description;
  };

  const removeNotesFromList = function (title) {
    delete notesList[title];
  };

  return { getNotesList, addToNotesList, removeNotesFromList };
})();
