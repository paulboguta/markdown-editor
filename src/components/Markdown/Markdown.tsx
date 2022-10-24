import { IPreviewMarkdownProps } from "pages/MainLayout/MainLayout.types";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAppDispatch } from "hooks/hooks";
import { editCurrentDocumentAction } from "redux/actions/currentDocumentActions";
import { Wrapper, Header, TextArea } from "./Markdown.styles";

export const Markdown = ({ showPreview }: IPreviewMarkdownProps) => {
  const [disableTextArea, setDisableTextArea] = useState<boolean>(false);
  const [docTitle, setDocTitle] = useState<string>("");
  const [markdownText, setMarkdownText] = useState<string>("");
  const document = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const dispatch = useAppDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
    // change document text always on change to redux state
    dispatch(editCurrentDocumentAction(event.target.value));
  };

  // set docTitle whenever title (from redux) changes
  useEffect(() => {
    setDocTitle(document.title);
  }, [document.title]);

  // disable user to type if no document is selected
  useEffect(() => {
    if (typeof docTitle === "string" && docTitle.length > 1) {
      setDisableTextArea(false);
    } else {
      setDisableTextArea(true);
    }
  }, [docTitle]);

  return (
    <Wrapper showPreview={showPreview}>
      <Header showPreview={showPreview}>
        <div>Markdown</div>
      </Header>
      <TextArea
        disabled={disableTextArea}
        showPreview={showPreview}
        name="text_area"
        value={document.text}
        onChange={onChangeInput}
      >
        {markdownText}
      </TextArea>
    </Wrapper>
  );
};
