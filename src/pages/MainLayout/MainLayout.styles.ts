import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 86px;
  right: 20px;

  @media (max-width: 768px) {
    top: 70px;
  }
`;
