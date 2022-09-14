import styled from "styled-components";

interface IProps {
  name: string;
}

export const BtnLogin = ({ name }: IProps) => {
  return <Button type="submit" value={name}></Button>;
};

const Button = styled.input`
  border: none;
  background-color: ${(props) => props.theme.orange};
  width: 202px;
  height: 40px;
  margin-top: 30px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.orange};
    transition: 0.3s ease-in;
  }
`;
