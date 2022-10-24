import {
  createDocument,
  getDocumentsFromFirebase,
} from "features/documents/documents.service";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/config";
import { AppDispatch } from "../store";

export const getDocumentsAction =
  (uid: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "FETCHING_DOCUMENTS",
      loading: true,
    });

    try {
      const data = await getDocumentsFromFirebase(uid);
      dispatch({
        type: "FETCHING_DOCUMENTS_SUCCESS",
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
      type: "CREATE_DOCUMENT_INIT",
      loading: true,
      error: null,
    });
    try {
      const id = await createDocument(newDocumentTitle, uid);
      dispatch({
        type: "CREATE_DOCUMENT_SUCCESS",
        newDoc: newDocumentTitle,
        id,
        loading: false,
        error: null,
      });
    } catch (e) {
      dispatch({
        type: "CREATE_DOCUMENT_ERROR",
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
      type: "SAVE_EDIT_DOCUMENT",
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
      type: "EDIT_DOCUMENT_NAME",
      newTitle,
      id,
    });
  };

export const deleteDocument =
  (id: string, documentName: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "Documents", `${id}`);
    await deleteDoc(docRef);

    dispatch({
      type: "DELETE_DOCUMENT",
      documentName,
    });
  };
