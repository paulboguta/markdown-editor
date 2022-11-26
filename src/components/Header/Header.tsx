import { useContext, useState } from "react";
import { Button } from "components/Buttons/Button";
import { MenuIcon } from "components/Menu/MenuIcon";
import { saveEditDocument } from "redux/actions/documentActions";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { CurrentDocument } from "components/Documents/CurrentDocument/CurrentDocument";
import { ReactComponent as IconDelete } from "../../assets/icon-delete.svg";
import { MenuContext } from "../../contexts/MenuContext";
import { useWindowDimensions, useAppDispatch } from "../../hooks/hooks";
import { Wrapper, SaveChanges } from "./Header.styles";
import { ReactComponent as IconSave } from "../../assets/icon-save.svg";
import { Delete } from "./Delete";

export const Header = () => {
  const [deleteModalClicked, setDeleteModalClicked] = useState<boolean>(false);
  const windowDimensions = useWindowDimensions();
  const dispatch = useAppDispatch();

  const { menuClicked } = useContext(MenuContext);
  const { text, id, title } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const { uid } = useSelector((state: RootState) => state.userReducer);

  const onClickSave = () => {
    dispatch(saveEditDocument(text, id, uid));
  };

  const onClickDeleteModal = () => {
    if (!title.length) {
      alert("No document is selected");
    } else {
      setDeleteModalClicked((prev) => !prev);
    }
  };

  const onClickCloseDeleteModal = () => {
    setDeleteModalClicked(false);
  };

  return (
    <Wrapper menuClicked={menuClicked}>
      <MenuIcon />
      {!menuClicked && <CurrentDocument />}
      {menuClicked && +windowDimensions.width > 768 && <CurrentDocument />}

      <Button
        backgroundColor="transparent"
        position="absolute"
        right={menuClicked ? "440px" : "190px"}
        mobileRight={menuClicked ? "340px" : "90px"}
        onClick={onClickDeleteModal}
      >
        <IconDelete />
      </Button>
      {deleteModalClicked && (
        <Delete onClickCloseDeleteModal={onClickCloseDeleteModal} />
      )}
      <Button
        onClick={onClickSave}
        backgroundColor="#e46643"
        color="white"
        flex="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="4px"
        gap="8px"
        height="40px"
        position="absolute"
        mobileWidth="40px"
        desktopWidth="152px"
        right={menuClicked ? "266px" : "16px"}
      >
        <IconSave />
        <SaveChanges>Save Changes</SaveChanges>
      </Button>
    </Wrapper>
  );
};
