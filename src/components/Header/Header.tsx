import { useContext } from "react";
import { Button } from "components/Buttons/Button";
import { MenuIcon } from "components/Menu/MenuIcon";
import { ReactComponent as IconDelete } from "../../assets/icon-delete.svg";
import { CurrentDocument } from "./CurrentDocument";
import { MenuContext } from "../../contexts/MenuContext";
import { useWindowDimensions } from "../../hooks/hooks";
import { Wrapper, SaveChanges } from "./Header.styles";
import { ReactComponent as IconSave } from "../../assets/icon-save.svg";

export const Header = () => {
  const { menuClicked } = useContext(MenuContext);
  const windowDimensions = useWindowDimensions();

  // const onClickSave = () => {
  // dispatch(editDocument(markdownInput, currentDocID));
  // };

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
