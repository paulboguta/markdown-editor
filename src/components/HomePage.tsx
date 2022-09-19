import { DarkModeContext } from "../contexts/DarkModeContext";
import { MenuContext } from "../contexts/MenuContext";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Menu } from "../components/Header/Menu/Menu";
import { ChangeEvent, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../styles/styles";
import { useAuth } from "../hooks/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/config";
import { useAppDispatch } from "../hooks/hooks";
import { CurrentDocumentContext } from "../contexts/CurrentDocumentContext";
import { editDocument } from "../redux/actions/documentActions";

export const HomePage = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [theme, setTheme] = useState(themeDark);
  const [showNewDocumentForm, setShowNewDocumentForm] =
    useState<boolean>(false);

  const [documents, setDocuments] = useState<any>(); // what type would it be?
  const [currentDocText, setCurrentDocText] = useState<string>("");
  const [currentDocTitle, setCurrentDocTitle] = useState<string>("");
  const [currentDocID, setCurrentDocID] = useState<string>("");
  const [markdownInput, setMarkdownInput] = useState<string>("");
  const currentUser = useAuth();

  const clickHandler = (): void => {
    setMenuClicked((menuClicked) => !menuClicked);
  };

  const newDocumentClicked = (): void => {
    setShowNewDocumentForm((showNewDocForm) => !showNewDocForm);
  };

  const changeDarkModeOnClick = (): void => {
    setDarkMode((darkMode) => !darkMode);

    darkMode ? setTheme(themeDark) : setTheme(themeLight);
  };

  // should this logic even be here? or other file and pass state here
  useEffect(() => {
    const getDocuments = async () => {
      const dataRef = collection(db, "Documents");
      const q = query(dataRef, where("uid", "==", currentUser.uid));
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDocuments();
  }, [menuClicked]); // now fixed, i created endless loop and used 50k reads for today ...

  const onClickDoc = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentDoc = documents.filter((doc: any) => {
      return doc.title === event.currentTarget.name;
    });

    const currentDocTitle = currentDoc.map((doc: any) => {
      return doc.title;
    });

    const currentDocText = currentDoc.map((doc: any) => {
      return doc.text;
    });

    const currentDocID = currentDoc.map((doc: any) => {
      return doc.id;
    });

    setCurrentDocTitle(currentDocTitle);
    setCurrentDocText(currentDocText);
    setCurrentDocID(currentDocID);
  };

  const dispatch = useAppDispatch();

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(event.target.value);
  };

  const saveData = () => {
    setTimeout(() => {
      dispatch(editDocument(markdownInput, currentDocID)); // stopped typing for 30s lets update!
    }, 3000);
  };

  useEffect(() => {
    setMarkdownInput(currentDocText.toString());
  }, [currentDocTitle]);

  return (
    <ThemeProvider theme={theme}>
      <DarkModeContext.Provider value={{ changeDarkModeOnClick, darkMode }}>
        <MenuContext.Provider
          value={{
            menuClicked,
            clickHandler,
            showNewDocumentForm,
            newDocumentClicked,
          }}
        >
          <CurrentDocumentContext.Provider
            value={{
              onClickDoc,
              currentDocText,
              currentDocTitle,
              currentDocID,
              documents,
              currentUser,
              markdownInput,
              changeHandler,
            }}
          >
            <Menu />
            <Header />
            <Main />
          </CurrentDocumentContext.Provider>
        </MenuContext.Provider>
      </DarkModeContext.Provider>
    </ThemeProvider>
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
