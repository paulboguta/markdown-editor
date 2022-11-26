import { useContext } from "react";
import { Button } from "components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { ToggleDarkMode } from "components/ToggleDarkMode/ToggleDarkMode";

import { DocumentsList } from "components/Documents/DocumentsList/DocumentsList";
import { Wrapper, WrapperSlider, HS, Username } from "./MenuStyles";
import { MenuContext } from "../../contexts/MenuContext";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Menu = () => {
  const { menuClicked, newDocumentButtonClicked } = useContext(MenuContext);
  const { email } = useSelector((state: RootState) => state.userReducer);

  return (
    <Wrapper>
      {menuClicked && (
        <WrapperSlider>
          <div>
            <Logo />
            <HS>My Documents</HS>
            <Button
              onClick={newDocumentButtonClicked}
              backgroundColor="#e46643"
              width="202px"
              height="40px"
              mt="30px"
              fontSize="15px"
              color="white"
              borderRadius="4px"
              backgroundColorHover="#f39765"
              flex="flex"
              alignItems="center"
              justifyContent="center"
              mobileMr="0px"
            >
              + New Document
            </Button>
            <DocumentsList />
          </div>
          <ToggleDarkMode />
          <Username>{email}</Username>
          <Button
            backgroundColor="#e46643"
            width="202px"
            height="40px"
            mt="30px"
            mb="10px"
            fontSize="15px"
            color="white"
            borderRadius="4px"
            backgroundColorHover="#f39765"
          >
            Log out
          </Button>
        </WrapperSlider>
      )}
    </Wrapper>
  );
};
