import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../redux/actions/todoActions";
function TodoList() {
  const { todos } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
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
                onClick={() => dispatch(toggleTodo(index))}
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
