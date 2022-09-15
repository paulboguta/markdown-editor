import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDenpbnkcnEat3IM6nTuWTeQqPts0WIMns",
  authDomain: "markdown-editor-dbe23.firebaseapp.com",
  databaseURL:
    "https://markdown-editor-dbe23-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "markdown-editor-dbe23",
  storageBucket: "markdown-editor-dbe23.appspot.com",
  messagingSenderId: "209436152770",
  appId: "1:209436152770:web:036f49f78aa699ce2afc5b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
