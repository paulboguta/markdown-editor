import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/config";
import { IDocument } from "../../Interfaces";
import { AppDispatch } from "../store";

export const CREATE_DOCUMENT = "CREATE_DOCUMENT";
export const READ_DOCUMENT = "READ_DOCUMENT";

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
