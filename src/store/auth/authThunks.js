import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, loggin, logout } from "./authSlide";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await signInWithGoogle();
    if (!res.ok) return dispatch(logout());
    return dispatch(loggin(res));
  };
};
