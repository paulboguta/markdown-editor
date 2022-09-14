import IconMenu from "../../../assets/icon-menu.svg";
import IconClose from "../../../assets/icon-close.svg";
import styled from "styled-components";
import { useContext } from "react";
import { MenuContext } from "../../../contexts/MenuContext";

export const MenuIcon = () => {
  const { menuClicked, clickHandler } = useContext(MenuContext);

  return (
    <Wrapper onClick={clickHandler}>
      {!menuClicked && <img src={IconMenu} />}
      {menuClicked && <img src={IconClose} />}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #35393f;
  border: none;
  cursor: pointer;
  margin-right: 24px;
  top: 0;
  left: 0;
  z-index: 99;

  &:hover {
    background-color: ${(props) => props.theme.orange};
    transition: 0.3s ease-in;
  }

  @media (max-width: 767px) {
    height: 56px;
    width: 56px;
  }

  @media (min-width: 768px) {
    height: 72px;
    width: 72px;
  }
`;
