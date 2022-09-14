import { createContext } from "react";

export type MenuContext = {
  menuClicked: boolean;
  clickHandler(): void;
};

export const MenuContext = createContext<MenuContext>({
  menuClicked: false,
  clickHandler: () => {},
});
