import { useContext } from "react";
import { MainLayout } from "../MainLayout/MainLayout";

import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

export const Main = () => {
  const { changeHandler, markdownInput } = useContext(CurrentDocumentContext);

  return (
    <MainLayout changeHandler={changeHandler} markdownInput={markdownInput} />
  );
};
