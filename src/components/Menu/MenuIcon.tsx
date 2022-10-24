import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAppDispatch } from "hooks/hooks";
import { saveEditDocument } from "redux/actions/documentActions";
import { WrapperMenuIcon } from "./MenuStyles";
import { ReactComponent as IconMenu } from "../../assets/icon-menu.svg";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";
import { MenuContext } from "../../contexts/MenuContext";

export const MenuIcon = () => {
  const [doc, setDoc] = useState({
    docText: "",
    docID: "",
  });
  const { menuClicked, menuClickHandler } = useContext(MenuContext);
  const { text, id } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const { uid } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useAppDispatch();

  const onClickMenu = () => {
    menuClickHandler();
    dispatch(saveEditDocument(doc.docText, doc.docID, uid));
  };

  useEffect(() => {
    setDoc({
      docText: text,
      docID: id,
    });
  }, [text, id]);

  return (
    <WrapperMenuIcon onClick={onClickMenu}>
      {!menuClicked && <IconMenu />}
      {menuClicked && <IconClose />}
    </WrapperMenuIcon>
  );
};
