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
  deleteHandler(): void;
  deleteModalHandler(): void;
  deleteClicked: boolean;
  deleteModalClicked: boolean;
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
  deleteHandler: () => {},
  deleteModalHandler: () => {},
  deleteClicked: false,
  deleteModalClicked: false,
});
