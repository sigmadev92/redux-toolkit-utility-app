import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoSlice";

const { add } = actions;
const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, _) => {
      state.message = "";
    },
  },
  //   reduxjs/toolkit V2 - function with builder parameter
  extraReducers: (builder) => {
    builder.addCase(add, (state, _) => {
      state.message = "Todo is added successfully";
    });
  },

  // with key-value
  //   extraReducers: {
  //     [add]: (state, _) => {
  //       state.message = "Todo is added successfully";
  //     },
  //   },

  //   Reduxjs/toolkit v1 - object with named events
  // extraReducers: {
  //   //whenever a todo is added OR
  //   // todo.add() action is dispatched event occurs
  //   //this will listen to the event and gets invoked
  //   "todo/add": (state, action) => {
  //     state.message = "Todo is added successfully";
  //   },
  // },
});

const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
export const NotificationActions = notificationSlice.actions;
export default notificationReducer;
