//initial state

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    { text: "nice", createdOn: "2025-03-12" },
    { text: "sass", createdOn: "2024-03-12" },
  ],
};

// noteSlice using createSlice from @reduxjs/toolkit

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toISOString().split("T")[0],
      });
    },
    remove: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export default noteSlice;

// noteReducer using redux
// function noteReducer(state = initialState, action) {
//   const { payload } = action;

//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, payload],
//       };
//     case DELETE_NOTE:
//       //here the payload is index
//       return {
//         ...state,
//         notes: state.notes.filter((_, index) => index !== payload),
//       };
//     default:
//       return state;
//   }
// }

// export default noteReducer;
