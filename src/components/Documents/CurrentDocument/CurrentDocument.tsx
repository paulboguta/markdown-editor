import { useState } from "react";
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

  const { title } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );

  const onClickCurrentDocument = () => {
    setCurrentDocumentClicked((prev) => !prev);
    if (!title.length) alert("No document selected");
  };

  const onClickClose = () => {
    setCurrentDocumentClicked(false);
  };

  return (
    <Wrapper>
      <Document onClick={onClickCurrentDocument}>
        <Text>Document Name</Text>
        <DocumentName>{title}.md</DocumentName>
        <IconDocument />
      </Document>
      {title.length > 1 && currentDocumentClicked ? (
        <CurrentDocumentModal onClickClose={onClickClose} />
      ) : null}
    </Wrapper>
  );
};
