import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/actions/noteActions";

function NoteList() {
  const { notes } = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();
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
                onClick={() => dispatch(deleteNote(index))}
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
