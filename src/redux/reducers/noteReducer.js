//initial state

import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    { text: "nice", createdOn: "2025-03-12" },
    { text: "sass", createdOn: "2024-03-12" },
  ],
};

function noteReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case DELETE_NOTE:
      //here the payload is index
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== payload),
      };
    default:
      return state;
  }
}

export default noteReducer;
