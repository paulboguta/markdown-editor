import { combineReducers } from "@reduxjs/toolkit";
import documentReducer from "./reducers/documentReducer";
import userReducer from "./reducers/userReducer";
import currentDocumentReducer from "./reducers/currentDocumentReducer";

const rootReducer = combineReducers({
  documentReducer,
  userReducer,
  currentDocumentReducer,
});

export default rootReducer;
