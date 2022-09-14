import { useContext } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import styled from "styled-components";
import { Logo } from "../Logo";
import { BtnNewDocument } from "../../Buttons/BtnNewDocument";
import { ToggleDarkMode } from "../../Buttons/ToggleDarkMode";

export const Menu = () => {
  const { menuClicked } = useContext(MenuContext);
  return (
    <Wrapper>
      {menuClicked && (
        <WrapperSlider>
          <div>
            <Logo />
            <HS>My Documents</HS>
            <BtnNewDocument />
            <ul></ul>
          </div>
          <ToggleDarkMode />
        </WrapperSlider>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
`;

const WrapperSlider = styled.div`
  background-color: #1d1f22;
  width: 250px;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  ul {
    height: 50vh;
    margin-top: 30px;
    margin-bottom: 100px;
    overflow-y: auto;
  }
`;

const HS = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7c8187;
  white-space: nowrap;
  margin-top: 10px;
`;
