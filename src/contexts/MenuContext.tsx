import { createContext } from "react";

export type MenuContext = {
  menuClicked: boolean;
  showNewDocumentForm: boolean;
  clickHandler(): void;
  newDocumentClicked(): void;
};

export const MenuContext = createContext<MenuContext>({
  menuClicked: false,
  showNewDocumentForm: false,
  clickHandler: () => {},
  newDocumentClicked: () => {},
});
