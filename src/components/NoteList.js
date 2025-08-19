import { useDispatch, useSelector } from "react-redux";
import { actions, noteSelector } from "../reduxjs_toolkit/slices/noteSlice";
function NoteList() {
  const notes = useSelector(noteSelector);
  const dispatch = useDispatch();
  const { remove } = actions;
  return (
    <div id="todolist">
      <h3>Total Todos {notes.length}</h3>
      <hr />
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              <span>{note.createdOn}</span>
              <span>{note.text}</span>
              <button
                className="btn btn-delete"
                onClick={() => dispatch(remove(index))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span>No notes created yet</span>
      )}
    </div>
  );
}

export default NoteList;
