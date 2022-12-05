import { ActionTypes } from "redux/action.types";
import { AppDispatch } from "redux/store";

export const setCurrentDocumentAction =
  (document: any) => (dispatch: AppDispatch) => {
    const { title, text, id } = document[0];
    dispatch({
      type: ActionTypes.SET_CURRENT_DOCUMENT,
      title,
      text,
      id,
    });
  };

export const editCurrentDocumentAction =
  (newText: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.EDIT_DOCUMENT,
      text: newText,
    });
  };
