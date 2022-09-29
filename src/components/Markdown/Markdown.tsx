import styled from "styled-components";
import { ChangeEvent, useState, useContext, useEffect } from "react";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

interface IMarkdownProps {
  showPreview: boolean;
  markdownInput: string;
  changeHandler(event: ChangeEvent<HTMLTextAreaElement>): void;
}

interface IHeaderStyle {
  width: string;
}

export const Markdown = ({
  showPreview,
  markdownInput,
  changeHandler,
}: IMarkdownProps) => {
  let width = showPreview ? "50vw" : "100vw";
  const [disableTextArea, setDisableTextArea] = useState<boolean>(false);
  const { currentDocTitle } = useContext(CurrentDocumentContext);

  useEffect(() => {
    if (currentDocTitle === "") {
      setDisableTextArea(true);
    } else {
      setDisableTextArea(false);
    }
  }, [currentDocTitle]);

  return (
    <Wrapper width={width}>
      <Header width={width}>
        <div>Markdown</div>
      </Header>
      <TextArea
        disabled={disableTextArea}
        width={width}
        value={markdownInput}
        onChange={changeHandler}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<IHeaderStyle>`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.div<IHeaderStyle>`
  height: 42px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.markdownHeader};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 72px;
  @media (max-width: 768px) {
    top: 56px;
  }

  div {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${(props) => props.theme.markdownHeaderText};
    margin-left: 20px;
  }
`;

const TextArea = styled.textarea<IHeaderStyle>`
  border: none;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.markDownText};
  width: ${(props) => props.width};
  height: 100vh;
  overflow-y: auto;
  resize: none;
  &:focus {
    outline: none;
  }

  font-family: "Roboto Mono";
`;
