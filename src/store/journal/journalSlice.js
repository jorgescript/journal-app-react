import { createSlice } from "@reduxjs/toolkit";

export const jornalSlice = createSlice({
  name: "jornal",
  initialState: {
    isSaving: false,
    savedMessage: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.savedMessage = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.savedMessage = "";
    },
    updatedNote: (state, action) => {
      state.notes = action.payload;
      state.isSaving = false;
      state.savedMessage = "Nota actualizada";
    },
    deleteNote: (state, action) => {},
  },
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updatedNote,
  deleteNote,
} = jornalSlice.actions;
