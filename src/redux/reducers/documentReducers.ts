import { IDocumentsState } from "../../types/types";

const initialState: IDocumentsState = {
  documents: [],
};

export const createDocumentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CREATE_DOCUMENT_SUCCESS":
      return [
        ...state.documents,
        {
          title: action.newDoc,
          id: action.id,
          text: "",
          loading: action.loading,
          error: action.error,
        },
      ];
    case "CREATE_DOCUMENT_INIT":
      return [
        ...state.documents,
        {
          title: "",
          id: "",
          text: "",
          loading: action.loading,
          error: action.error,
        },
      ];
    case "CREATE_DOCUMENT_ERROR":
      return [
        ...state.documents,
        {
          title: "",
          id: "",
          text: "",
          loading: action.loading,
          error: action.error,
        },
      ];
    // case "EDIT_DOCUMENT":
    //   return [
    //     state.documents?.map((doc) => {
    //       if (doc.title === action.title) {
    //         return [...state.documents, { text: action.newText }];
    //       }
    //       return state.documents;
    //     }),
    //   ];
    // case "EDIT_DOCUMENT_NAME":
    //   return [
    //     state.documents?.map((doc) => {
    //       if (doc.title === action.title) {
    //         return [...state.documents, { title: action.newTitle }];
    //       }
    //       return state.documents;
    //     }),
    //   ];
    // case "DELETE_DOCUMENT":
    //   return [
    //     state.documents?.filter((doc) => doc.title !== action.documentName),
    //   ];
    default:
      return state;
  }
};
