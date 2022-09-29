import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneDark,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { DarkModeContext } from "../../contexts/DarkModeContext";

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
  const [styleMode, setStyleMode] = useState<React.CSSProperties>(duotoneDark);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      setStyleMode(duotoneLight);
    } else {
      setStyleMode(duotoneDark);
    }
  }, [darkMode]);

  return (
    <Wrapper>
      <Header w={w}>
        <div>Preview</div>
      </Header>

      <TextArea w={w}>
        <ReactMarkdown
          // https://github.com/remarkjs/react-markdown#plugins
          children={markdownInput}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  // @ts-ignore
                  style={styleMode}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
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
  overflow-y: auto;
  height: 100vh;
`;
