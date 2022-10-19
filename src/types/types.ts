import { FirebaseError } from "firebase/app";

export interface IAppHeadingsProps {
  type: string;
  children: any;
}

export interface IStyleProps {
  type: string;
}

export interface IDocument {
  title: string;
  text: string;
  id: string;
  error: null | FirebaseError;
  loading: boolean;
}

export interface IDocumentsState {
  documents: IDocument[];
}

export interface IUser {
  email: string;
  uid: string;
}
