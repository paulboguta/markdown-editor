import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperForm = styled.div`
  background-color: #c1c4cb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  border-radius: 4px;

  span {
    margin-bottom: 50px;
  }
`;

export const Input = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  label {
    font-family: "Roboto Mono";
  }

  input[type="text"],
  input[type="password"] {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

export const MoveToLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
