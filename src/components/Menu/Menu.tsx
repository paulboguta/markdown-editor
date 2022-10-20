import { useContext, useState, useEffect } from "react";
import { Button } from "components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Wrapper, WrapperSlider, HS, Username } from "./MenuStyles";
import { MenuContext } from "../../contexts/MenuContext";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as IconDocument } from "../../assets/icon-document.svg";

export const Menu = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { menuClicked, newDocumentButtonClicked } = useContext(MenuContext);
  const { email } = useSelector((state: RootState) => state.userReducer.email);
  const { loading, documents }: { loading: boolean; documents: string[] } =
    useSelector((state: RootState) => state.documentReducer);

  // set user email
  useEffect(() => {
    setUserEmail(email);
  }, [email]);

  // set loading state
  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

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
            <ul>
              {isLoading ? (
                <p>Data is loading...</p>
              ) : (
                documents.map((doc: any) => {
                  const { id } = doc;
                  return (
                    <li key={id}>
                      <IconDocument />
                      <button
                        type="submit"
                        // onClick={onClickDoc}
                        name={doc.title}
                        id={id}
                      >
                        {doc.title}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          {/* <ToggleDarkMode /> */}
          <Username>{userEmail}</Username>
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
