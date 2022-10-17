import { IDocumentsState } from "../../Interfaces";


const initialState: IDocumentsState = {
  documents: [],
};

const documentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CREATE_DOCUMENT":
      return [
        ...state.documents,
        {
          title: action.newDoc,
          uid: action.uid,
          text: "",
        },
      ];
    case "EDIT_DOCUMENT":
      return [
        state.documents?.map((doc) => {
          if (doc.title === action.title) {
            return [...state.documents, { text: action.newText }];
          }
          return state.documents;
        }),
      ];
    case "EDIT_DOCUMENT_NAME":
      return [
        state.documents?.map((doc) => {
          if (doc.title === action.title) {
            return [...state.documents, { title: action.newTitle }];
          }
        }),
      ];
    case "DELETE_DOCUMENT":
      return [
        state.documents?.filter((doc) => doc.title !== action.documentName),
      ];
    default:
      return state;
  }
};

export default documentReducer;
