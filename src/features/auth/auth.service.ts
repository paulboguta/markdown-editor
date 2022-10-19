import { auth } from "config/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const login = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signup = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
