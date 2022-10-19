import styled from "styled-components";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button } from "components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { MenuContext } from "contexts/MenuContext";
import { createDocumentAction } from "../../redux/actions/documentActions";
import { useAppDispatch } from "../../hooks/hooks";

const Wrapper = styled.div`
  background: #c1c4cb;
  width: 340px;
  height: 200px;
  border-radius: 4px;
  position: fixed;
  top: 20%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 280px;
  }

  input {
    outline: none;
    border: none;
    width: 200px;
    height: 30px;
    border-radius: 4px;
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;

export const CreateDocForm = () => {
  const [newDocName, setNewDocName] = useState<string>("");
  const [uid, setUid] = useState("");
  const dispatch = useAppDispatch();
  const userID = useSelector((state: RootState) => state.userReducer.uid);
  const { newDocumentButtonClicked } = useContext(MenuContext);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDocName(event.target.value);
  };

  // const newDocumentNameConfirmed = () => {
  //   const currentDocs = documents.map((doc: any) => doc.title);
  //   if (currentDocs.includes(newDocName)) {
  //     alert("This document name is already taken! Try another one");
  //     return;
  //   } else if (newDocName.length > 15) {
  //     alert("Document name can't exceed 15 characters. Try another name");
  //     return;
  //   } else if (newDocName.length < 3) {
  //     alert("Document name has to be at least 3 characters. Try another name");
  //     return;
  //   } else {
  //     dispatch(createDocument(newDocName, currentUser.uid));
  //   }

  //   newDocumentClicked();
  //   setNewDocName("");
  // };

  const onClickCreateDoc = () => {
    dispatch(createDocumentAction(newDocName, uid));
  };

  useEffect(() => {
    setUid(userID);
  }, [userID]);

  return (
    <Wrapper>
      <h4>New document name:</h4>
      <input
        type="text"
        placeholder="Document Name"
        onChange={changeHandler}
        value={newDocName}
      />
      <Button
        onClick={onClickCreateDoc}
        backgroundColor="#e46643"
        width="202px"
        height="40px"
        mt="0px"
        fontSize="15px"
        color="white"
        borderRadius="4px"
        backgroundColorHover="#f39765"
        flex="flex"
        alignItems="center"
        justifyContent="center"
        mobileMr="0px"
      >
        Confirm
      </Button>
      <Button
        onClick={newDocumentButtonClicked}
        backgroundColor="transparent"
        position="absolute"
        top="10px"
        left="10px"
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
            <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
          </g>
        </svg>
      </Button>
    </Wrapper>
  );
};
