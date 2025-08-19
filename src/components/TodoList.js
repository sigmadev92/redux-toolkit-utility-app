import { useDispatch, useSelector } from "react-redux";
import { actions, todoSelector } from "../reduxjs_toolkit/slices/todoSlice";
function TodoList() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  const { toggle } = actions;
  return (
    <div id="todolist">
      <h3>Total Todos {todos.length}</h3>
      <hr />
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              <span>{todo.text}</span>
              <span>{todo.completed ? "" : "Not "} Completed</span>
              <button
                className="btn btn-toggle"
                onClick={() => dispatch(toggle(index))}
              >
                Toggle
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span>No todos created yet</span>
      )}
    </div>
  );
}

export default TodoList;
