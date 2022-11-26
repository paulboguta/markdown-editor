import { MainLayout } from "pages/MainLayout/MainLayout";
import { Menu } from "components/Menu/Menu";
import { MenuContext } from "contexts/MenuContext";
import { useEffect, useMemo, useState } from "react";
import { Header } from "components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [showNewDocumentForm, setShowNewDocumentForm] =
    useState<boolean>(false);

  const { uid } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (uid.length < 1) {
      navigate("/signup");
    }
  }, [navigate, uid]);

  const menuClickHandler = (): void => {
    setMenuClicked((prev: boolean) => !prev);
  };

  const newDocumentButtonClicked = (): void => {
    setShowNewDocumentForm((prev) => !prev);
  };

  const MenuContextValue = useMemo(
    () => ({
      menuClicked,
      menuClickHandler,
      newDocumentButtonClicked,
      showNewDocumentForm,
    }),
    [menuClicked, showNewDocumentForm]
  );

  return (
    <MenuContext.Provider value={MenuContextValue}>
      <Menu />
      <Header />
      <MainLayout />
    </MenuContext.Provider>
  );
};
