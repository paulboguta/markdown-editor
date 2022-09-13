import styled from "styled-components";

export const BtnNewDocument = () => {
  return <Wrapper>+ New Document</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  background-color: ${(props) => props.theme.dark.orange};
  width: 202px;
  height: 40px;
  margin-top: 100px;
  font-size: 15px;
  color: white;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme.dark.orangeHover};
    transition: 0.3s ease-in;
  }
`;
