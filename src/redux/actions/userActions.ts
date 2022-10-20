import { AppDispatch } from "redux/store";

export const loginUser =
  (email: string, uid: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "LOGIN_USER_SUCCESS",
      email,
      uid,
    });
  };

export const signUpUser =
  (email: string, uid: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: "REGISTER_USER_SUCCESS",
      email,
      uid,
    });
  };
