import {
  logOutFirebase,
  registerUserWithEmailAndPassword,
  sigInWithForm,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, loggin, logout } from "./authSlice";

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, displayName, email, photoURL, uid, message } =
      await signInWithGoogle();
    if (!ok) return dispatch(logout({ errorMessage: message }));
    return dispatch(loggin({ displayName, email, photoURL, uid }));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, message } =
      await registerUserWithEmailAndPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage: message }));
    return dispatch(loggin({ uid, email, displayName, photoURL }));
  };
};

export const startEmailAndPaswordSigIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, displayName, message } = await sigInWithForm({
      email,
      password,
    });
    if (!ok) return dispatch(logout({ errorMessage: message }));
    return dispatch(loggin({ uid, photoURL, email, displayName }));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logOutFirebase();
    dispatch(logout({ errorMessage: null }));
  };
};
