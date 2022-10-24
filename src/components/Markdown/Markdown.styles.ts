import styled from "styled-components";

interface IHeaderStyle {
  showPreview: boolean | undefined;
}

export const Wrapper = styled.div<IHeaderStyle>`
  height: 100%;
  width: ${(props) => (props.showPreview ? "50vw" : "100vw")};
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div<IHeaderStyle>`
  height: 42px;
  width: ${(props) => (props.showPreview ? "50vw" : "100vw")};
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

export const TextArea = styled.textarea<IHeaderStyle>`
  border: none;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.markDownText};
  width: ${(props) => (props.showPreview ? "50vw" : "100vw")};
  margin-top: 120px;
  height: 100vh;
  overflow-y: auto;
  resize: none;
  &:focus {
    outline: none;
  }

  font-family: "Roboto Mono";
`;
