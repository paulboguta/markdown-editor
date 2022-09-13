import styled from "styled-components";

interface IMarkdownProps {
  showPreview: boolean;
}

interface IHeaderStyle {
  width: string;
}

export const Markdown = ({ showPreview }: IMarkdownProps) => {
  let width = showPreview ? "50vw" : "100vw";

  return (
    <Wrapper width={width}>
      <Header width={width}>
        <div>Markdown</div>
      </Header>
      <TextArea width={width} />
    </Wrapper>
  );
};

const Wrapper = styled.div<IHeaderStyle>`
  height: 100%;
  width: ${(props) => props.width};
`;

const Header = styled.div<IHeaderStyle>`
  height: 42px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.dark.a200};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${(props) => props.theme.dark.a500};
    margin-left: 20px;
  }
`;

const TextArea = styled.textarea<IHeaderStyle>`
  border: none;

  width: ${(props) => props.width};
  height: 100vh;
  resize: none;
`;
