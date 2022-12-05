import { ActionTypes } from "redux/action.types";
import { IDocument } from "types/types";

const initialState: IDocument = {
  title: "",
  text: "",
  id: "",
};

interface IAction {
  type: string;
  title: string;
  text: string;
  id: string;
  newTitle: string;
}

const currentDocumentReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_DOCUMENT:
      return { title: action.title, text: action.text, id: action.id };

    case ActionTypes.EDIT_DOCUMENT:
      return { title: state.title, text: action.text, id: state.id };
    case ActionTypes.EDIT_DOCUMENT_NAME:
      return { title: action.newTitle, text: state.text, id: state.id };
    case ActionTypes.DELETE_DOCUMENT:
      return { title: "", text: "", id: "" };
    default:
      return state;
  }
};

export default currentDocumentReducer;
