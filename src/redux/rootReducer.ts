import { combineReducers } from "@reduxjs/toolkit";
import documentReducer from "./reducers/reducers";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  documentReducer,
  userReducer,
});

export default rootReducer;
