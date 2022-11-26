import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.background};
`;

export const Header = styled.div`
  height: 42px;
  background-color: ${(props) => props.theme.markdownHeader};
  border-left: 1px solid ${(props) => props.theme.borderLeftPreview};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 72px;
  width: 50vw;
  @media (max-width: 768px) {
    top: 56px;
    width: 100vw;
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

export const TextArea = styled.div`
  padding: 10px;
  border: none;
  border-left: 1px solid ${(props) => props.theme.borderLeftPreview};
  color: ${(props) => props.theme.previewText};
  overflow-y: auto;
  margin-top: 110px;
  height: 100vh;
`;
