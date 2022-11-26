import { useContext, useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  duotoneDark,
  duotoneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { IPreviewMarkdownProps } from "pages/MainLayout/MainLayout.types";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Wrapper, Header, TextArea } from "./Preview.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export const Preview = ({ width }: IPreviewMarkdownProps) => {
  const [markdownInput, setMarkdownInput] = useState<string>("");
  const [styleMode, setStyleMode] = useState<any>(duotoneDark);
  const { darkMode } = useContext(DarkModeContext);
  const { text } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );

  useEffect(() => {
    setStyleMode(darkMode ? duotoneLight : duotoneDark);
  }, [darkMode]);

  useEffect(() => {
    setMarkdownInput(text);
  }, [text]);

  return (
    <Wrapper>
      <Header width={width! > 768 ? "50vw" : "100vw"}>
        <div>Preview</div>
      </Header>

      <TextArea width={width! > 768 ? "50vw" : "100vw"}>
        <ReactMarkdown
          // copied from reactmarkdown docs
          /* eslint-disable react/no-children-prop */
          /* eslint-disable react/no-unstable-nested-components */
          className="preview-markdown"
          children={markdownInput}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            code({ inline, className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={styleMode}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code className={className}>{children}</code>
              );
            },
          }}
        />
      </TextArea>
    </Wrapper>
  );
};
