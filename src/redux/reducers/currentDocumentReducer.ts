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

    case "EDIT_DOCUMENT":
      return { title: state.title, text: action.text, id: state.id };
    case "EDIT_DOCUMENT_NAME":
      return { title: action.newTitle, text: state.text, id: state.id };
    default:
      return state;
  }
};

export default currentDocumentReducer;
