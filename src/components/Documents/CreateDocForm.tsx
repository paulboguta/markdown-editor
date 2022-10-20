import styled from "styled-components";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button } from "components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { MenuContext } from "contexts/MenuContext";
import { validateNewDoc } from "features/validation/validation";
import { createDocumentAction } from "../../redux/actions/documentActions";
import { useAppDispatch } from "../../hooks/hooks";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";

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

  const onClickCreateDoc = async () => {
    if (await validateNewDoc(newDocName, uid)) {
      dispatch(createDocumentAction(newDocName, uid));
      newDocumentButtonClicked();
    }
  };

  useEffect(() => {
    setUid(userID);
  }, [userID, newDocumentButtonClicked]);

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
        <IconClose />
      </Button>
    </Wrapper>
  );
};
