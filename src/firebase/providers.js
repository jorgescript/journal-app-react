import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = res.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    return { ok: false, message: error.message };
  }
};

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = res.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return { ok: true, uid, photoURL, email, displayName };
  } catch (error) {
    return { ok: false, message: error.message };
  }
};

export const sigInWithForm = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL, displayName } = res.user;
    return { ok: true, uid, photoURL, email, displayName };
  } catch (error) {
    return { ok: false, message: error };
  }
};
