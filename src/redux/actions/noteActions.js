//action constants

const ADD_NOTE = "add_note";
const DELETE_NOTE = "delete_note";

// creating actions

const addNote = (text) => ({
  type: ADD_NOTE,
  payload: { text, createdOn: new Date().toDateString() },
});

const deleteNote = (index) => ({ type: DELETE_NOTE, payload: index });

export { ADD_NOTE, DELETE_NOTE, addNote, deleteNote };
