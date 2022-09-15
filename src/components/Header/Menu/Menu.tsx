import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import styled from "styled-components";
import { Logo } from "../Logo";
import { BtnNewDocument } from "../../Buttons/BtnNewDocument";
import { ToggleDarkMode } from "../../Buttons/ToggleDarkMode";
import { BtnLogOut } from "../../Buttons/BtnLogOut";
import { useAuth } from "../../../hooks/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/config";
import IconDocument from "../../../assets/icon-document.svg";

export const Menu = () => {
  const currentUser = useAuth();
  const { menuClicked, newDocumentClicked } = useContext(MenuContext);
  const [documents, setDocuments] = useState<any>(); // what type would it be?

  // should this logic even be here? or other file and pass state here
  useEffect(() => {
    const getDocuments = async () => {
      const dataRef = collection(db, "Documents");
      const q = query(dataRef, where("uid", "==", currentUser.uid));
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDocuments();
  }, [menuClicked, documents, setDocuments]);

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
                      <button>{doc.title}</button>
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
