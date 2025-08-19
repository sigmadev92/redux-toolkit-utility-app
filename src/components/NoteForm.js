import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions/noteActions";

function NoteForm() {
  const inputNoteRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteText = inputNoteRef.current.value;
    dispatch(addNote(noteText));
    inputNoteRef.current.value = "";
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Note Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-body">
        <div className="form-field">
          <label htmlFor="text">Text</label>
          <textarea
            ref={inputNoteRef}
            placeholder="write a note here"
          ></textarea>
        </div>
        <button className="btn btn-submit">Create Note</button>
      </form>
      <div className="form-footer"></div>
    </div>
  );
}

export default NoteForm;
