import { useContext } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import { CurrentDocumentContext } from "../../../contexts/CurrentDocumentContext";
import styled from "styled-components";
import { Logo } from "../Logo";
import { BtnNewDocument } from "../../Buttons/BtnNewDocument";
import { ToggleDarkMode } from "../../Buttons/ToggleDarkMode";
import { BtnLogOut } from "../../Buttons/BtnLogOut";

import IconDocument from "../../../assets/icon-document.svg";

export const Menu = () => {
  const { menuClicked, newDocumentClicked } = useContext(MenuContext);
  const { onClickDoc, documents, currentUser } = useContext(
    CurrentDocumentContext
  );

  return (
    <Wrapper>
      {menuClicked && (
        <WrapperSlider>
          <div>
            <Logo />
            <HS>My Documents</HS>
            <BtnNewDocument newDocumentClicked={newDocumentClicked} />
            <ul>
              {documents !== undefined &&
                documents.map((doc: any, key: number) => {
                  return (
                    <li key={key}>
                      <img src={IconDocument} />
                      <button onClick={onClickDoc} name={doc.title}>
                        {doc.title}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <ToggleDarkMode />
          <Username>{currentUser?.email}</Username>
          <BtnLogOut />
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
    background-color: #2b2d31;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 25px;
    margin-top: 5px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: #fff;
      font-family: "Roboto Mono", sans-serif;

      &:hover {
        color: ${(props) => props.theme.orange};
        transition: 0.3s ease-in;
      }
    }
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

const Username = styled.div`
  color: #fff;
  opacity: 0.5;
  margin-top: 20px;
`;
