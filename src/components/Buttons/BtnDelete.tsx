import { ReactComponent as IconDelete } from "../../assets/icon-delete.svg";
import { ButtonDeleteStyled } from "./Button.styles";
import { IButtonDeleteProps } from "./Button.types";

export const BtnDelete = ({ onClick }: IButtonDeleteProps) => {
  return (
    <ButtonDeleteStyled onClick={onClick}>
      <IconDelete />
    </ButtonDeleteStyled>
  );
};
