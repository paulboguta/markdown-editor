import { ButtonStyled } from "./Button.styles";
import { IButtonProps } from "./Button.types";

export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
