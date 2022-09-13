import { BtnDelete } from "../Buttons/BtnDelete";
import { BtnSaveChange } from "../Buttons/BtnSaveChange";
import styled from "styled-components";
import { Logo } from "./Logo";
import { CurrentDocument } from "./CurrentDocument";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  return (
    <Wrapper>
      <Menu />
      <span>
        <CurrentDocument />
      </span>
      <BtnDelete />
      <BtnSaveChange />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 72px;
  width: 100vw;
  background-color: ${(props) => props.theme.dark.a800};

  @media (max-width: 767px) {
    height: 56px;

    span {
      display: none;
    }
  }
`;
