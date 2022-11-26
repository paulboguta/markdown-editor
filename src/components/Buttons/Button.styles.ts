import styled from "styled-components";
import { IButtonStyledProps } from "./Button.types";

export const ButtonStyled = styled.button<IButtonStyledProps>`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  display: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};

  &:hover {
    transition: 0.3s ease-in;
    background-color: ${(props) => props.backgroundColorHover};
  }

  @media (max-width: 768px) {
    margin-right: ${(props) => props.mobileMr};
    width: ${(props) => props.mobileWidth};
    right: ${(props) => props.mobileRight};
  }

  @media (min-width: 768px) {
    width: ${(props) => props.desktopWidth};
  }
`;
