import { db } from "config/config";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";

export const getDocumentsFromFirebase = async (uid: string) => {
  const q = query(collection(db, `Users`, uid, "Documents"));
  const querySnapshot = await getDocs(q);
  const docs: any[] = [];
  querySnapshot.forEach((document) => {
    docs.push(document.data());
  });
  return docs;
};

export const getCurrentDocumentData = (id: string, docs: any[]) => {
  return docs.filter((document) => document.id === id);
};

export const createDocument = async (title: string, uid: string) => {
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
};
