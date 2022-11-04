import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const newNote = { title: "", body: "", date: new Date().getTime() };
      const newDoc = doc(collection(FirebaseBD, `${uid}/journal/notes`));
      await setDoc(newDoc, newNote);
      newNote.id = newDoc.id;
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
