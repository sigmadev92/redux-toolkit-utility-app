import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../reduxjs_toolkit/slices/todoSlice";
import {
  notificationSelector,
  NotificationActions,
} from "../reduxjs_toolkit/slices/notificationSlice";
function TodoForm() {
  const inputTodoRef = useRef();
  const { add } = actions;
  const message = useSelector(notificationSelector);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputTodoRef.current.value;
    dispatch(add(todoText));
    inputTodoRef.current.value = "";
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(NotificationActions.reset());
    }, 1000);
    // eslint-disable-next-line
  }, [message]);
  return (
    <div className="form-container">
      {message && (
        <p style={{ backgroundColor: "#1fe011ff", color: "white" }}>
          {message}
        </p>
      )}
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
