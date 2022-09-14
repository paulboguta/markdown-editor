import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IPreviewProps {
  showPreview: boolean;
  width: number;
  markdownInput: string;
}

interface IPreviewStyle {
  w: string;
}

export const Preview = ({
  showPreview,
  width,
  markdownInput,
}: IPreviewProps) => {
  let w = width > 768 ? "50vw" : "100vw";

  return (
    <Wrapper>
      <Header w={w}>
        <div>Preview</div>
      </Header>

      <TextArea w={w}>
        <ReactMarkdown
          children={markdownInput}
          remarkPlugins={[remarkGfm]}
        ></ReactMarkdown>
      </TextArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;

const Header = styled.div<IPreviewStyle>`
  height: 42px;
  width: ${(props) => props.w};
  background-color: ${(props) => props.theme.markdownHeader};
  border-left: 1px solid ${(props) => props.theme.borderLeftPreview};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${(props) => props.theme.markdownHeaderText};
    margin-right: 60px;

    display: flex;
    align-items: center;
  }

  img {
    margin-right: 20px;
  }
`;

const TextArea = styled.div<IPreviewStyle>`
  padding: 10px;
  border: none;
  border-left: 1px solid ${(props) => props.theme.borderLeftPreview};
  color: ${(props) => props.theme.previewText};
  width: ${(props) => props.w};
  height: 100vh;
`;
