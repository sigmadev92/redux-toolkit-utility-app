// Action constants

const ADD_TOTO = "add_todo";
const TOGGLE_TODO = "toggle_todo";

// Action creators

const addTodo = (text) => ({
  type: ADD_TOTO,
  payload: { text, completed: false },
});

const toggleTodo = (index) => ({ type: TOGGLE_TODO, payload: index });

export { ADD_TOTO, toggleTodo, addTodo, TOGGLE_TODO };
