import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
function TodoForm() {
  const inputTodoRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputTodoRef.current.value;
    dispatch(addTodo(todoText));
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
