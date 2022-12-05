import {
  createDocument,
  getDocumentsFromFirebase,
} from "features/documents/documents.service";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ActionTypes } from "redux/action.types";
import { db } from "../../config/config";
import { AppDispatch } from "../store";

export const getDocumentsAction =
  (uid: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.FETCHING_DOCUMENTS,
      loading: true,
    });

    try {
      const data = await getDocumentsFromFirebase(uid);
      dispatch({
        type: ActionTypes.FETCHING_DOCUMENTS_SUCCESS,
        documents: data,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const createDocumentAction =
  (newDocumentTitle: string, uid: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.CREATE_DOCUMENT_INIT,
      loading: true,
      error: null,
    });
    try {
      const id = await createDocument(newDocumentTitle, uid);
      dispatch({
        type: ActionTypes.CREATE_DOCUMENT_SUCCESS,
        newDoc: newDocumentTitle,
        id,
        loading: false,
        error: null,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.CREATE_DOCUMENT_ERROR,
        loading: false,
        error: e,
      });
    }
  };

export const saveEditDocument =
  (newText: string, id: string, uid: string) =>
  async (dispatch: AppDispatch) => {
    const docRef = doc(db, "Users", uid, "Documents", id);
    await updateDoc(docRef, {
      text: newText,
    });
    dispatch({
      type: ActionTypes.SAVE_EDIT_DOCUMENT,
      newText,
      id,
    });
  };

export const editDocumentName =
  (newTitle: string, id: string, uid: string) =>
  async (dispatch: AppDispatch) => {
    const docRef = doc(db, "Users", uid, "Documents", id);
    await updateDoc(docRef, {
      title: newTitle,
    });
    dispatch({
      type: ActionTypes.EDIT_DOCUMENT_NAME,
      newTitle,
      id,
    });
  };

export const deleteDocument =
  (uid: string, id: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "Users", uid, "Documents", id);
    await deleteDoc(docRef);

    dispatch({
      type: ActionTypes.DELETE_DOCUMENT,
      id,
    });
  };
