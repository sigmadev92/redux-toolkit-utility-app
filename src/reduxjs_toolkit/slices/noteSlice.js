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

const noteReducer = noteSlice.reducer;

export default noteReducer;
export const actions = noteSlice.actions;

export const noteSelector = (state) => state.noteReducer.notes;
