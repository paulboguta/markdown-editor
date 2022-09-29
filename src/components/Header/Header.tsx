import { BtnDelete } from "../Buttons/BtnDelete";
import { BtnSaveChange } from "../Buttons/BtnSaveChange";
import styled from "styled-components";
import { CurrentDocument } from "./CurrentDocument";
import { MenuIcon } from "./Menu/MenuIcon";
import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { useWindowDimensions } from "../../hooks/hooks";
import { Delete } from "./Delete";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

interface IWrapperStyle {
  menuClicked: boolean;
}

export const Header = () => {
  const { menuClicked } = useContext(MenuContext);
  const { deleteHandler, deleteModalClicked, deleteModalHandler } = useContext(
    CurrentDocumentContext
  );
  const windowDimensions = useWindowDimensions();

  return (
    <Wrapper menuClicked={menuClicked}>
      <MenuIcon />
      {!menuClicked && <CurrentDocument />}
      {menuClicked && +windowDimensions.width > 768 && <CurrentDocument />}
      <BtnDelete clickHandler={deleteModalHandler} />
      {deleteModalClicked && <Delete clickHandler={deleteHandler} />}
      <BtnSaveChange />
    </Wrapper>
  );
};

const Wrapper = styled.div<IWrapperStyle>`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100vw;
  background-color: #2b2d31;
  margin-left: ${(props) => (props.menuClicked ? "250px" : "0px")};

  @media (max-width: 768px) {
    height: 56px;
  }
  position: fixed;
  top: 0;
`;
