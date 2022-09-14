import { BtnDelete } from "../Buttons/BtnDelete";
import { BtnSaveChange } from "../Buttons/BtnSaveChange";
import styled from "styled-components";
import { CurrentDocument } from "./CurrentDocument";
import { MenuIcon } from "./Menu/MenuIcon";

export interface IMenuProps {
  clickHandler(): void;
  menuClicked: boolean;
}

interface IWrapperStyle {
  menuClicked: boolean;
}

export const Header = ({ clickHandler, menuClicked }: IMenuProps) => {
  return (
    <Wrapper menuClicked={menuClicked}>
      <MenuIcon clickHandler={clickHandler} menuClicked={menuClicked} />
      <span>
        <CurrentDocument />
      </span>
      <BtnDelete />
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

  @media (max-width: 767px) {
    height: 56px;

    span {
      display: none;
    }
  }
`;
