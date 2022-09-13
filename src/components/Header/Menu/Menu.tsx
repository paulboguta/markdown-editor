import { MenuIcon } from "./MenuIcon";
import styled from "styled-components";
import { Logo } from "../Logo";
import { BtnNewDocument } from "../../Buttons/BtnNewDocument";
import { useState } from "react";

export const Menu = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  const clickHandler = (): void => {
    setMenuClicked((menuClicked) => !menuClicked);
  };

  return (
    <Wrapper>
      {menuClicked && (
        <WrapperSlider>
          <div>
            <Logo />
            <HS>My Documents</HS>
            <BtnNewDocument />
            <ul>
              <li>document map later</li>
            </ul>
          </div>
        </WrapperSlider>
      )}
      <MenuIcon clickHandler={clickHandler} menuClicked={menuClicked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const WrapperSlider = styled.div`
  background-color: ${(props) => props.theme.dark.a900};
  width: 250px;
  height: 950px;
  display: flex;
  flex-direction: column;

  div {
    position: absolute;
    top: 15px;
    left: 20px;

    @media (max-width: 768px) {
      top: 10px;
    }
  }
`;

const HS = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => props.theme.dark.a500};
  margin-top: 30px;
  white-space: nowrap;
`;
