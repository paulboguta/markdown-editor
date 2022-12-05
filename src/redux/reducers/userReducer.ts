import { AnyAction } from "@reduxjs/toolkit";
import { ActionTypes } from "redux/action.types";
import { IUser } from "types/types";

const initialState: IUser = {
  email: "",
  uid: "",
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return { email: action.email, uid: action.uid };
    case ActionTypes.REGISTER_USER_SUCCESS:
      return { email: action.email, uid: action.uid };
    default:
      return state;
  }
};

export default userReducer;
