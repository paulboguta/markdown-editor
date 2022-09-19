import { ChangeEvent, createContext } from "react";

export type CurrentDocumentContext = {
  documents: any;
  currentDocTitle: string;
  currentDocText: string;
  currentDocID: string;
  onClickDoc(event: React.MouseEvent<HTMLButtonElement>): void;
  currentUser?: any;
  changeHandler(event: ChangeEvent<HTMLTextAreaElement>): void;
  markdownInput: string;
};

export const CurrentDocumentContext = createContext<CurrentDocumentContext>({
  documents: {},
  currentDocTitle: "",
  currentDocText: "",
  currentDocID: "",
  onClickDoc: () => {},
  currentUser: "",
  changeHandler: () => {},
  markdownInput: "",
});
