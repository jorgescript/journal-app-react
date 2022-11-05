import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  updatedNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const newNote = { title: "", body: "", date: new Date().getTime() };
      const docRef = doc(collection(FirebaseBD, `${uid}/journal/notes`));
      await setDoc(docRef, newNote);
      newNote.id = docRef.id;
      dispatch(addNewEmptyNote(newNote));
      dispatch(setActiveNote(newNote));
    } catch (error) {}
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
    } catch (error) {}
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note, notes } = getState().journal;
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    const docRef = doc(FirebaseBD, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    const newNotes = notes.map((item) => {
      if (item.id === note.id) {
        item = note;
      }
      return item;
    });
    dispatch(updatedNote(newNotes));
    try {
    } catch (error) {
      console.log(error);
    }
  };
};
