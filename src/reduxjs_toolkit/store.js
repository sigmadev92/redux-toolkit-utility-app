//legacy code

// import { redux } from "redux";

// const store = redux.createStore(todoReducer);

// export { store };

//new code
// import { combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from "./slices/todoSlice";
import noteReducer from "./slices/noteSlice";
import notificationReducer from "./slices/notificationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
});

export default store;
