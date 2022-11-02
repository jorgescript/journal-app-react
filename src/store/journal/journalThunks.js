import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote } from "./journalSlice";

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
