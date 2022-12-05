import { ActionTypes } from "redux/action.types";
import { IDocument, IDocumentsState } from "../../types/types";

const initialState: IDocumentsState = {
  documents: [],
  loading: false,
};

interface IAction {
  type: string;
  documents: IDocument[];
  loading: boolean;
  newDoc: string;
  id: string;
  error: any;
  newText: string;
  newTitle: string;
}

const documentReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.CREATE_DOCUMENT_INIT: {
      return {
        documents: [...state.documents],
        loading: true,
      };
    }
    case ActionTypes.CREATE_DOCUMENT_SUCCESS:
      return {
        documents: [
          ...state.documents,
          {
            title: action.newDoc,
            id: action.id,
            text: "",
            loading: action.loading,
            error: action.error,
          },
        ],
        loading: false,
      };

    case ActionTypes.FETCHING_DOCUMENTS: {
      return { loading: action.loading };
    }

    case ActionTypes.FETCHING_DOCUMENTS_SUCCESS: {
      return { documents: [...action.documents], loading: action.loading };
    }
    case ActionTypes.SAVE_EDIT_DOCUMENT:
      return {
        documents: state.documents?.map((doc) => {
          if (doc.id === action.id) {
            return { text: action.newText, title: doc.title, id: doc.id };
          }
          return doc;
        }),

        loading: false,
      };
    case ActionTypes.EDIT_DOCUMENT_NAME:
      return {
        documents: state.documents?.map((doc) => {
          if (doc.id === action.id) {
            return { text: doc.text, title: action.newTitle, id: doc.id };
          }
          return doc;
        }),
        loading: false,
      };
    case ActionTypes.DELETE_DOCUMENT:
      return {
        documents: state.documents?.filter((doc) => doc.id !== action.id),
        loading: false,
      };
    default:
      return state;
  }
};

export default documentReducer;
