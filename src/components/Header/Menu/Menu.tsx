import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../contexts/MenuContext";
import styled from "styled-components";
import { Logo } from "../Logo";
import { BtnNewDocument } from "../../Buttons/BtnNewDocument";
import { ToggleDarkMode } from "../../Buttons/ToggleDarkMode";
import { BtnLogOut } from "../../Buttons/BtnLogOut";
import { useAuth } from "../../../hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/config";

export const Menu = () => {
  const currentUser = useAuth();
  const { menuClicked, newDocumentClicked } = useContext(MenuContext);
  const [documents, setDocuments] = useState<any>();

  useEffect(() => {
    const getDocuments = async () => {
      const dataRef = collection(db, "Documents");
      const q = query(dataRef, where("uid", "==", currentUser.uid));
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(currentUser.uid);
    getDocuments();
  }, []);

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
                  return <li key={key}>{doc.title}</li>;
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
