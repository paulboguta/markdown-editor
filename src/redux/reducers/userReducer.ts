import { AnyAction } from "@reduxjs/toolkit";
import { IUser } from "types/types";

const initialState: IUser = {
  email: "",
  uid: "",
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "LOGIN_USER_SUCCESS":
      return { email: action.email, uid: action.uid };
    case "REGISTER_USER_SUCCESS":
      return { email: action.email, uid: action.uid };
    default:
      return state;
  }
};

export default userReducer;
