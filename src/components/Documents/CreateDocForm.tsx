import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { BtnConfirmNewDocument } from "../Buttons/BtnConfirmNewDocument";
import { createDocument } from "../../redux/actions/documentActions";
import { useAppDispatch, useAuth } from "../../hooks";

export const CreateDocForm = () => {
  const [newDocName, setNewDocName] = useState<string>("");
  const dispatch = useAppDispatch();
  const currentUser = useAuth();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDocName(event.target.value);
  };

  const newDocumentNameConfirmed = () => {
    dispatch(createDocument(newDocName, currentUser.uid));
    setNewDocName("");
  };

  return (
    <Wrapper>
      <h4>New document name:</h4>
      <input type="text" placeholder="Document Name" onChange={changeHandler} />
      <BtnConfirmNewDocument
        newDocumentNameConfirmed={newDocumentNameConfirmed}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #c1c4cb;
  width: 340px;
  height: 200px;
  border-radius: 4px;
  position: fixed;
  left: 35%;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    background-color: ${(props) => props.theme.orange};
    margin-right: 49px;
  }
`;
