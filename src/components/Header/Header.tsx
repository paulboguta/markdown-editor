import { useContext, useEffect, useState } from "react";
import { Button } from "components/Buttons/Button";
import { MenuIcon } from "components/Menu/MenuIcon";
import { saveEditDocument } from "redux/actions/documentActions";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { ReactComponent as IconDelete } from "../../assets/icon-delete.svg";
import { CurrentDocument } from "./CurrentDocument";
import { MenuContext } from "../../contexts/MenuContext";
import { useWindowDimensions, useAppDispatch } from "../../hooks/hooks";
import { Wrapper, SaveChanges } from "./Header.styles";
import { ReactComponent as IconSave } from "../../assets/icon-save.svg";

export const Header = () => {
  const [doc, setDoc] = useState({
    docText: "",
    docID: "",
  });
  const windowDimensions = useWindowDimensions();
  const dispatch = useAppDispatch();

  const { menuClicked } = useContext(MenuContext);
  const { text, id } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const { uid } = useSelector((state: RootState) => state.userReducer);

  const onClickSave = () => {
    dispatch(saveEditDocument(doc.docText, doc.docID, uid));
  };

  useEffect(() => {
    setDoc({
      docText: text,
      docID: id,
    });
  }, [text, id]);

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
      >
        <IconDelete />
      </Button>
      {/* {deleteModalClicked && <Delete clickHandler={deleteHandler} />}  */}
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
