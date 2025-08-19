//legacy code

// import { redux } from "redux";

// const store = redux.createStore(todoReducer);

// export { store };

//new code
import { combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import noteReducer from "./reducers/noteReducer";

const combinedReducer = combineReducers({
  todoReducer,
  noteReducer,
});

const store = createStore(combinedReducer);

export default store;
