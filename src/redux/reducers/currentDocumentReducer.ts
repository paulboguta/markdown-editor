import { AnyAction } from "@reduxjs/toolkit";
import { IDocument } from "types/types";

const initialState: IDocument = {
  title: "",
  text: "",
  id: "",
};

const currentDocumentReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_CURRENT_DOCUMENT":
      return { title: action.title, text: action.text, id: action.id };

    default:
      return state;
  }
};

export default currentDocumentReducer;
