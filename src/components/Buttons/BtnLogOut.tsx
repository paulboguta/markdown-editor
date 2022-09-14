import styled from "styled-components";
import { auth } from "../../config/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const BtnLogOut = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return <Wrapper onClick={logout}>Sign out</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  background-color: ${(props) => props.theme.orange};
  width: 202px;
  height: 40px;
  margin-top: 10px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.orangeHover};
    transition: 0.3s ease-in;
  }
`;
