import { ADD_TOTO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Give keys to driver", completed: false },
    { text: "Delete browser config", completed: true },
  ],
};

function todoReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    //payload here is {text,completed:false}
    case ADD_TOTO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case TOGGLE_TODO:
      //payload here is index
      //payload:index
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === payload) {
            todo.completed = !todo.completed;
          }

          return todo;
        }),
      };
    default:
      return state;
  }
}

export default todoReducer;
