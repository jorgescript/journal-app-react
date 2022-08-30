import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(res);
    const { displayName, email, photoURL, uid } = res.user;
    return { ok: true, displayName, email, photoURL, uid };
  } catch (error) {
    return { ok: false, message: error.message };
  }
};
