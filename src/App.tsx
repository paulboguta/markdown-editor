import { ChangeEvent, useState } from "react";
import "./styles/App.css";
import { GlobalStyle, theme } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import ReactMarkdown from "react-markdown";
import { Header } from "./components/Header/Header";
import { MainLayout } from "./components/MainLayout/MainLayout";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainLayout />
    </ThemeProvider>
  );
};

{
  /* <textarea
        autoFocus
        value={input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
      />
      <ReactMarkdown children={input} /> */
}
