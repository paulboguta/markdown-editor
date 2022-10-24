import { createContext } from "react";

type TMenuContext = {
  menuClicked: boolean;
  menuClickHandler(): void;
  showNewDocumentForm: boolean;
  newDocumentButtonClicked(): void;
};

export const MenuContext = createContext<TMenuContext>({
  menuClicked: false,
  menuClickHandler: () => {},
  showNewDocumentForm: false,
  newDocumentButtonClicked: () => {},
});
