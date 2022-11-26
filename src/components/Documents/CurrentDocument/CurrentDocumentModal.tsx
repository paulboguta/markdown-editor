import { ReactComponent as IconClose } from "assets/icon-close.svg";
import { Button } from "components/Buttons/Button";
import { validateNewDoc } from "features/validation/validation";
import { useAppDispatch } from "hooks/hooks";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { editDocumentName } from "redux/actions/documentActions";
import { RootState } from "redux/store";
import { WrapperModal } from "./CurrentDocument.styles";

interface ICurrentDocumentModalProps {
  onClickClose(): void;
}

export const CurrentDocumentModal = ({
  onClickClose,
}: ICurrentDocumentModalProps) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const dispatch = useAppDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };
  const { uid } = useSelector((state: RootState) => state.userReducer);
  const { id } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const onClickConfirm = () => {
    dispatch(editDocumentName(newTitle, ID, userID));
    onClickClose();
  };

  return (
    <WrapperModal>
      <h4>New document name:</h4>
      <input
        type="text"
        placeholder="Document Name"
        onChange={changeHandler}
        value={newTitle}
      />
      <Button
        onClick={onClickConfirm}
        backgroundColor="#e46643"
        width="202px"
        height="40px"
        fontSize="15px"
        color="white"
        borderRadius="4px"
        backgroundColorHover="#f39765"
      >
        Confirm
      </Button>
      <Button
        onClick={onClickClose}
        backgroundColor="transparent"
        position="absolute"
        top="10px"
        left="10px"
      >
        <IconClose />
      </Button>
    </WrapperModal>
  );
};
