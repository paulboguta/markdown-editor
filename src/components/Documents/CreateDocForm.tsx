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
      <ButtonNewDoc onClick={newDocumentNameConfirmed}>Confirm</ButtonNewDoc>
      <ButtonX onClick={newDocumentClicked}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
            <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
          </g>
        </svg>
      </ButtonX>
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
    width: 260px;
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

const ButtonNewDoc = styled.button`
  border: none;
  background-color: ${(props) => props.theme.orange};
  width: 202px;
  height: 40px;
  font-size: 15px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-right: 0px;
  }

  &:hover {
    background: ${(props) => props.theme.orangeHover};
    transition: 0.3s ease-in;
  }
`;

const ButtonX = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;
