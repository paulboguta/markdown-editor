import { db } from "config/config";
import { validateNewDoc } from "features/validation/validation";
import {
  collection,
  doc,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
  setDoc,
} from "firebase/firestore";

export const getDocumentsFromFirebase = async (uid: string) => {
  const dataRef = collection(db, "Users", uid, "Documents");
  const data = await getDocs(dataRef);
  const docs = data.docs.map(
    (document: QueryDocumentSnapshot<DocumentData>) => ({
      ...document.data(),
      title: document.data().title,
    })
  );
  return docs;
};

export const createDocument = async (title: string, uid: string) => {
  const docs = getDocumentsFromFirebase(uid);
  // validate new document title
  const validation = await validateNewDoc(title, docs);
  if (validation) {
    const docsRef = collection(db, "Users", uid, "Documents");
    const docRef = doc(docsRef);
    const docID = docRef.id;
    await setDoc(
      doc(docsRef, `${docID}`),
      {
        title,
        text: "",
        id: docID,
      },
      { merge: true }
    );
    return docID;
  }
};
