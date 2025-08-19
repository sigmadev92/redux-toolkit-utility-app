import { useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../reduxjs_toolkit/slices/todoSlice";
function TodoForm() {
  const inputTodoRef = useRef();
  const { add } = actions;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputTodoRef.current.value;
    dispatch(add(todoText));
    inputTodoRef.current.value = "";
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Todo Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-body">
        <div className="form-field">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="new todo"
            ref={inputTodoRef}
            required
          />
        </div>
        <button className="btn btn-submit">Create</button>
      </form>
      <div className="form-footer"></div>
    </div>
  );
}

export default TodoForm;
