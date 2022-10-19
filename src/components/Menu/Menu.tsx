import { useContext } from "react";
import { Button } from "components/Buttons/Button";
import { Wrapper, WrapperSlider, HS } from "./MenuStyles";
import { MenuContext } from "../../contexts/MenuContext";

import { ReactComponent as Logo } from "../../assets/logo.svg";
// import IconDocument from "../../../assets/icon-document.svg";

export const Menu = () => {
  const { menuClicked } = useContext(MenuContext);
  return (
    <Wrapper>
      {menuClicked && (
        <WrapperSlider>
          <div>
            <Logo />
            <HS>My Documents</HS>
            <Button
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
            {/* <ul>
              {documents !== undefined &&
                documents.map((doc: any) => {
                  return (
                    <li>
                      <IconDocument />
                      <button
                        type="submit"
                        onClick={onClickDoc}
                        name={doc.title}
                      >
                        {doc.title}
                      </button>
                    </li>
                  );
                })}
            </ul> */}
          </div>
          {/* <ToggleDarkMode /> */}
          {/* <Username>{currentUser?.email}</Username> */}
          <Button
            backgroundColor="#e46643"
            width="202px"
            height="40px"
            mt="30px"
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
