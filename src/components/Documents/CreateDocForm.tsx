import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button } from "components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { MenuContext } from "contexts/MenuContext";
import { validateNewDoc } from "features/validation/validation";
import { Wrapper } from "./CreateDocFormStyles";
import { createDocumentAction } from "../../redux/actions/documentActions";
import { useAppDispatch } from "../../hooks/hooks";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";

export const CreateDocForm = () => {
  const [newDocName, setNewDocName] = useState<string>("");
  const [uid, setUid] = useState("");
  const dispatch = useAppDispatch();
  const userID = useSelector((state: RootState) => state.userReducer.uid);
  const { newDocumentButtonClicked } = useContext(MenuContext);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewDocName(event.target.value);
  };

  const onClickCreateDoc = async () => {
    // if validated dispatch action
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
