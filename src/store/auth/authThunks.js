import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlide";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await signInWithGoogle();
  };
};
