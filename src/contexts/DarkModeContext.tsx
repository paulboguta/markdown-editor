import { createContext } from "react";

export interface IDarkModeContext {
  darkMode: boolean;
  changeDarkModeOnClick(): void;
}

export const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  changeDarkModeOnClick: () => {},
});
