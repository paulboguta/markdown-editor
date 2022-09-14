import "./styles/App.css";
import { GlobalStyle, themeDark, themeLight } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Menu } from "./components/Header/Menu/Menu";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const App = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState(themeDark);

  const clickHandler = (): void => {
    setMenuClicked((menuClicked) => !menuClicked);
  };

  const changeDarkModeOnClick = (): void => {
    setDarkMode((darkMode) => !darkMode);

    darkMode ? setTheme(themeDark) : setTheme(themeLight);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu
          menuClicked={menuClicked}
          changeDarkModeOnClick={changeDarkModeOnClick}
          darkMode={darkMode}
        />
        <Header clickHandler={clickHandler} menuClicked={menuClicked} />
        <Main />
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
