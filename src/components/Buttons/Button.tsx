import { ButtonStyled } from "./Button.styles";
import { IButtonProps } from "./Button.types";

export const Button = ({
  children,
  onClick,
  backgroundColor,
  width,
  height,
  mt,
  fontSize,
  color,
  borderRadius,
  backgroundColorHover,
  flex,
  justifyContent,
  alignItems,
  gap,
  mobileMr,
  mobileWidth,
  desktopWidth,
  position,
  right,
  left,
  top,
  bottom,
  mobileRight,
}: IButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      mt={mt}
      fontSize={fontSize}
      color={color}
      borderRadius={borderRadius}
      backgroundColorHover={backgroundColorHover}
      flex={flex}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      mobileMr={mobileMr}
      mobileWidth={mobileWidth}
      desktopWidth={desktopWidth}
      position={position}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      mobileRight={mobileRight}
    >
      {children}
    </ButtonStyled>
  );
};
