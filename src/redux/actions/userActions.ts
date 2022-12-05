import { ActionTypes } from "redux/action.types";
import { AppDispatch } from "redux/store";

export const loginUser =
  (email: string, uid: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.LOGIN_USER_SUCCESS,
      email,
      uid,
    });
  };

export const signUpUser =
  (email: string, uid: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.REGISTER_USER_SUCCESS,
      email,
      uid,
    });
  };
