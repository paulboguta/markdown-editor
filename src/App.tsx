import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Theme } from "styles/Theme";
import { useMemo, useState } from "react";
import { DarkModeContext } from "contexts/DarkModeContext";
import { GlobalStyle } from "./styles/styles";
import { LoginForm } from "./pages/Login/LoginForm";
import { SignupForm } from "./pages/Signup/SignupForm";
import { HomePage } from "./pages/Home/HomePage";
import store from "./redux/store";

export const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeDarkModeOnClick = (): void => {
    setDarkMode((prev: boolean) => !prev);
  };

  const DarkModeContextValue = useMemo(
    () => ({
      darkMode,
      changeDarkModeOnClick,
    }),
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={DarkModeContextValue}>
      <Theme>
        <Provider store={store}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </Provider>
      </Theme>
    </DarkModeContext.Provider>
  );
};
