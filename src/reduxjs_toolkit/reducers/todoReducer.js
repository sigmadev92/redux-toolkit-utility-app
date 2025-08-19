const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    { text: "Give keys to driver", completed: false },
    { text: "Delete browser config", completed: true },
  ],
};

// todoReducer using @reduxjs/toolkit
const todoSlice = createSlice({
  name: "todo", // name of feature
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      if (action.payload >= state.todos.length) {
        return;
      }
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
    },
  },
});

export default todoSlice;
// todoReducer using redux

// function todoReducer(state = initialState, action) {
//   const { payload } = action;
//   switch (action.type) {
//     //payload here is {text,completed:false}
//     case ADD_TOTO:
//       return {
//         ...state,
//         todos: [...state.todos, payload],
//       };
//     case TOGGLE_TODO:
//       //payload here is index
//       //payload:index
//       return {
//         ...state,
//         todos: state.todos.map((todo, index) => {
//           if (index === payload) {
//             todo.completed = !todo.completed;
//           }

//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }

// export default todoReducer;
