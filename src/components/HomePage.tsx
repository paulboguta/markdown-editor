import { DarkModeContext } from "../contexts/DarkModeContext";
import { MenuContext } from "../contexts/MenuContext";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Menu } from "../components/Header/Menu/Menu";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../styles/styles";

export const HomePage = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState(themeDark);
  const [showNewDocumentForm, setShowNewDocumentForm] =
    useState<boolean>(false);

  const clickHandler = (): void => {
    setMenuClicked((menuClicked) => !menuClicked);
  };

  const newDocumentClicked = (): void => {
    setShowNewDocumentForm((showNewDocForm) => !showNewDocForm);
  };

  const changeDarkModeOnClick = (): void => {
    setDarkMode((darkMode) => !darkMode);

    darkMode ? setTheme(themeDark) : setTheme(themeLight);
  };

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider value={{ changeDarkModeOnClick, darkMode }}>
        <MenuContext.Provider
          value={{
            menuClicked,
            clickHandler,
            showNewDocumentForm,
            newDocumentClicked,
          }}
        >
          <Menu />
          <Header />
          <Main />
        </MenuContext.Provider>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};
