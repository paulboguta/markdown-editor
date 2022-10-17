import { combineReducers } from "@reduxjs/toolkit";
import documentReducer from "./reducers/reducers";

const rootReducer = combineReducers({
  documentReducer,
});

export default rootReducer;
