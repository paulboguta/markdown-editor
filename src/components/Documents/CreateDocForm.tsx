import styled from "styled-components";
import { ChangeEvent, useContext, useState } from "react";
import { createDocument } from "../../redux/actions/documentActions";
import { useAppDispatch, useAuth } from "../../hooks/hooks";
import { MenuContext } from "../../contexts/MenuContext";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

export const CreateDocForm = () => {
  const [newDocName, setNewDocName] = useState<string>("");
  const dispatch = useAppDispatch();
  const currentUser = useAuth();
  const { newDocumentClicked } = useContext(MenuContext);
  const { documents } = useContext(CurrentDocumentContext);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDocName(event.target.value);
  };

  const newDocumentNameConfirmed = () => {
    const currentDocs = documents.map((doc: any) => doc.title);
    if (currentDocs.includes(newDocName)) {
      alert("This document name is already taken! Try another one");
      return;
    } else if (newDocName.length > 15) {
      alert("Document name can't exceed 15 characters. Try another name");
      return;
    } else if (newDocName.length < 3) {
      alert("Document name has to be at least 3 characters. Try another name");
      return;
    } else {
      dispatch(createDocument(newDocName, currentUser.uid));
    }

    newDocumentClicked();
    setNewDocName("");
  };

  return (
    <Wrapper>
      <h4>New document name:</h4>
      <input
        type="text"
        placeholder="Document Name"
        onChange={changeHandler}
        value={newDocName}
      />
      <button onClick={newDocumentNameConfirmed}>Confirm</button>
    </Wrapper>
  );
};

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
    width: 240px;
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

  button {
    border: none;
    background-color: #e46643;
    width: 202px;
    height: 40px;
    font-size: 15px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin-right: 0px;
    }

    button:hover {
      background: ${(props) => props.theme.orangeHover};
      transition: 0.3s ease-in;
    }
  }
`;
