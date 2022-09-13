import { ChangeEvent } from "react";
import { MainLayout } from "../MainLayout/MainLayout";
import { useState } from "react";

export const Main = () => {
  const [markdownInput, setMarkdownInput] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(event.target.value);
  };

  return (
    <MainLayout changeHandler={changeHandler} markdownInput={markdownInput} />
  );
};
