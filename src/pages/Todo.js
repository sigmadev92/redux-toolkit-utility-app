import styles from "../styles/Todo.module.css";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Provider } from "react-redux";
import store from "../redux/store";
function Todo() {
  return (
    <div className={`${styles.todoPage} page`}>
      <h2>Todo App</h2>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </div>
  );
}

export default Todo;
