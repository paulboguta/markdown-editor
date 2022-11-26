import styled from "styled-components";

interface IPreviewStyle {
  width: string;
}

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;

export const Header = styled.div<IPreviewStyle>`
  height: 42px;
  width: ${(props) => props.width};
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

export const TextArea = styled.div<IPreviewStyle>`
  padding: 10px;
  border: none;
  border-left: 1px solid ${(props) => props.theme.borderLeftPreview};
  color: ${(props) => props.theme.previewText};
  width: ${(props) => props.width};
  overflow-y: auto;
  margin-top: 110px;
  height: 100vh;
`;
