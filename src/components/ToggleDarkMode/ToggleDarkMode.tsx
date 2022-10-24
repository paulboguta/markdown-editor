import { useContext } from "react";
import { Button, WrapperToggle, Circle } from "./ToggleDarkMode.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { ReactComponent as IconDark } from "../../assets/icon-dark-mode.svg";
import { ReactComponent as IconLight } from "../../assets/icon-light-mode.svg";

export const ToggleDarkMode = () => {
  const { darkMode, changeDarkModeOnClick } = useContext(DarkModeContext);

  const toggle = darkMode ? "#fff" : "transparent";
  const toggle2 = darkMode ? "transparent" : "#fff";

  return (
    <Button onClick={changeDarkModeOnClick}>
      <IconDark />
      <WrapperToggle>
        <Circle toggle={toggle2} />
        <Circle toggle={toggle} />
      </WrapperToggle>

      <IconLight />
    </Button>
  );
};
