import { IPreviewMarkdownProps } from "pages/MainLayout/MainLayout.types";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAppDispatch } from "hooks/hooks";
import { editCurrentDocumentAction } from "redux/actions/currentDocumentActions";
import { Wrapper, Header, TextArea } from "./Markdown.styles";

export const Markdown = ({ showPreview }: IPreviewMarkdownProps) => {
  const [disableTextArea, setDisableTextArea] = useState<boolean>(false);
  const [markdownText, setMarkdownText] = useState<string>("");
  const { title, text } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const dispatch = useAppDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
    dispatch(editCurrentDocumentAction(event.target.value));
  };

  // disable user to type if no document is selected
  useEffect(() => {
    setDisableTextArea(!!(typeof title === "string" && !title.length));
  }, [title]);

  return (
    <Wrapper width={showPreview ? "50vw" : "100vw"}>
      <Header width={showPreview ? "50vw" : "100vw"}>
        <div>Markdown</div>
      </Header>
      <TextArea
        disabled={disableTextArea}
        width={showPreview ? "50vw" : "100vw"}
        name="text_area"
        value={text}
        onChange={onChangeInput}
      >
        {markdownText}
      </TextArea>
    </Wrapper>
  );
};
