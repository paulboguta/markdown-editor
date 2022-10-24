import styled from "styled-components";

interface ICircleStyle {
  toggle: string;
}

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 104px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const WrapperToggle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 48px;
  height: 24px;
  border-radius: 14.5px;
  background-color: #5a6069;
`;

export const Circle = styled.div<ICircleStyle>`
  background-color: ${(props) => props.toggle};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
