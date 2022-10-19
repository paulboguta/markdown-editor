import styled from "styled-components";
import { IButtonStyledProps } from "./Button.types";

export const ButtonStyled = styled.button<IButtonStyledProps>`
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.mt};
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
  }

  @media (min-width: 768px) {
    width: ${(props) => props.desktopWidth};
  }
`;

export const ButtonDeleteStyled = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  position: absolute;
  right: 190px;

  @media (max-width: 768px) {
    right: 90px;
  }

  svg:hover path {
    stroke: transparent;
    fill: ${(props) => props.theme.orange};
    transition: 0.3s ease-in;
  }
`;
