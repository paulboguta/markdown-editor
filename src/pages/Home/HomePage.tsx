import { MainLayout } from "pages/MainLayout/MainLayout";
import { Menu } from "components/Menu/Menu";
import { MenuContext } from "contexts/MenuContext";
import { useMemo, useState } from "react";
import { Header } from "components/Header/Header";

export const HomePage = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [showNewDocumentForm, setShowNewDocumentForm] =
    useState<boolean>(false);

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
