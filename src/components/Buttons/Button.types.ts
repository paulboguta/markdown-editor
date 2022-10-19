export interface IButtonProps extends IButtonStyledProps {
  children?: string | React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface IButtonStyledProps {
  backgroundColor: string;
  width?: string;
  height?: string;
  mt?: string;
  fontSize?: string;
  color?: string;
  borderRadius?: string;
  backgroundColorHover?: string;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  flex?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  mobileWidth?: string;
  desktopWidth?: string;
  mobileMr?: string;
}

export interface IButtonDeleteProps {
  onClick?(): void;
}
