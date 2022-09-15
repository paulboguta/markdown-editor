import { IDocumentsState } from "../../Interfaces";
import { CREATE_DOCUMENT } from "../actions/documentActions";
import { auth } from "../../config/config";

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
    default:
      return state;
  }
};

export default documentReducer;
