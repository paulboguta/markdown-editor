import { useContext } from "react";
import { WrapperMenuIcon } from "./MenuStyles";
import { ReactComponent as IconMenu } from "../../assets/icon-menu.svg";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";
import { MenuContext } from "../../contexts/MenuContext";

export const MenuIcon = () => {
  const { menuClicked, menuClickHandler } = useContext(MenuContext);

  return (
    <WrapperMenuIcon onClick={menuClickHandler}>
      {!menuClicked && <IconMenu />}
      {menuClicked && <IconClose />}
    </WrapperMenuIcon>
  );
};
