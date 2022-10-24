import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  Wrapper,
  Document,
  Text,
  DocumentName,
} from "./CurrentDocument.styles";
import { ReactComponent as IconDocument } from "../../../assets/icon-document.svg";
import { CurrentDocumentModal } from "./CurrentDocumentModal";

export const CurrentDocument = () => {
  const [currentDocumentClicked, setCurrentDocumentClicked] = useState(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  const onClickCurrentDocument = () => {
    setCurrentDocumentClicked((prev) => !prev);
    if (currentTitle.length < 1) alert("No document selected");
  };

  const onClickClose = () => {
    setCurrentDocumentClicked(false);
  };

  const { title } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );

  useEffect(() => {
    setCurrentTitle(title);
  }, [title]);

  return (
    <Wrapper>
      <Document onClick={onClickCurrentDocument}>
        <Text>Document Name</Text>
        <DocumentName>{title}.md</DocumentName>
        <IconDocument />
      </Document>
      {currentTitle.length > 1 && currentDocumentClicked ? (
        <CurrentDocumentModal onClickClose={onClickClose} />
      ) : null}
    </Wrapper>
  );
};
