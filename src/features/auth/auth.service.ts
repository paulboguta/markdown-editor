import { auth, db } from "config/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const addUserToCollection = async (email: string, uid: string) => {
  await setDoc(
    doc(db, "Users", uid),
    {
      email,
      uid,
    },
    { merge: true }
  );
};

export const login = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signup = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  addUserToCollection(email, user.user.uid);
  return user;
};
