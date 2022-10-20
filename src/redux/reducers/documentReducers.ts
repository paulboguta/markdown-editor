import { IDocumentsState } from "../../types/types";

const initialState: IDocumentsState = {
  documents: [],
  loading: false,
};

const documentReducer = (state = initialState, action: any) => {
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

    case "FETCHING_DOCUMENTS": {
      return { loading: action.loading };
    }

    case "FETCHING_DOCUMENTS_SUCCESS": {
      return { documents: [...action.documents], loading: action.loading };
    }
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

export default documentReducer;
