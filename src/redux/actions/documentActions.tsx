import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/config";
import { AppDispatch } from "../store";

export const CREATE_DOCUMENT = "CREATE_DOCUMENT";
export const EDIT_DOCUMENT = "EDIT_DOCUMENT";

export const createDocument =
  (newDocumentTitle: string, uid: string) => async (dispatch: AppDispatch) => {
    await addDoc(collection(db, "Documents"), {
      title: newDocumentTitle,
      text: "",
      uid: uid,
    });
    dispatch({
      type: CREATE_DOCUMENT,
      newDoc: newDocumentTitle,
      uid: uid,
    });
  };

export const editDocument =
  (newText: string, id: string) => async (dispatch: AppDispatch) => {
    const docRef = doc(db, "Documents", `${id}`);
    await updateDoc(docRef, {
      text: newText,
    });
    dispatch({
      type: EDIT_DOCUMENT,
      newText: newText,
    });
  };
