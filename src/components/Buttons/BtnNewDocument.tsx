import styled from "styled-components";

interface IProps {
  newDocumentClicked?(): void;
}

export const BtnNewDocument = ({ newDocumentClicked }: IProps) => {
  return <Wrapper onClick={newDocumentClicked}>+ New Document</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  background-color: ${(props) => props.theme.orange};
  width: 202px;
  height: 40px;
  margin-top: 40px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.orangeHover};
    transition: 0.3s ease-in;
  }
`;
