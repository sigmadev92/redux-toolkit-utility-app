const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [
    { text: "Give keys to driver", completed: false },
    { text: "Delete browser config", completed: true },
  ],
};

// todoSlice using @reduxjs/toolkit
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

const todoReducer = todoSlice.reducer;

export default todoReducer;

export const actions = todoSlice.actions;

export const todoSelector = (state) => state.todoReducer.todos;
