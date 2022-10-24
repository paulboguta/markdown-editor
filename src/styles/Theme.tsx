import { DarkModeContext } from "contexts/DarkModeContext";
import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider, ITheme } from "styled-components";

interface IThemeProps {
  children: React.ReactNode;
}

export const themeDark: ITheme = {
  background: "#151619",
  markdownHeader: "#1D1F22",
  markdownHeaderText: "#C1C4CB",
  markDownText: "#C1C4CB",
  previewText: "#fff",
  header: "#2B2D31",
  borderLeftPreview: "#5A6069",
  orange: "#E46643",
  orangeHover: "#F39765",
};

export const themeLight: ITheme = {
  background: "#fff",
  markdownHeader: "#F5F5F5",
  markdownHeaderText: "#7C8187",
  markDownText: "#35393F",
  previewText: "black",
  header: "#2B2D31",
  borderLeftPreview: "#e4e4e4",
  orange: "#E46643",
  orangeHover: "#F39765",
};

export const Theme: React.FC<IThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themeLight);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      setTheme(themeLight);
    } else {
      setTheme(themeDark);
    }
  }, [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
