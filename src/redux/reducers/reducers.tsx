import { IDocumentsState } from "../../Interfaces";
import {
  CREATE_DOCUMENT,
  DELETE_DOCUMENT,
  EDIT_DOCUMENT,
} from "../actions/documentActions";

const initialState: IDocumentsState = {
  documents: [],
};

const documentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_DOCUMENT:
      return [
        ...state.documents,
        {
          title: action.newDoc,
          uid: action.uid,
          text: "",
        },
      ];
    case EDIT_DOCUMENT:
      return [
        state.documents?.map((doc) => {
          if (doc.title === action.title) {
            return [...state.documents, { text: action.newText }];
          }
          return state.documents;
        }),
      ];
    case DELETE_DOCUMENT:
      return [
        state.documents?.filter((doc) => doc.title !== action.documentName),
      ];
    default:
      return state;
  }
};

export default documentReducer;