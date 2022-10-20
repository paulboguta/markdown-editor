import styled from "styled-components";

export const Wrapper = styled.div`
  background: #c1c4cb;
  width: 340px;
  height: 200px;
  border-radius: 4px;
  position: fixed;
  top: 20%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 280px;
  }

  input {
    outline: none;
    border: none;
    width: 200px;
    height: 30px;
    border-radius: 4px;
    margin-bottom: 50px;
    margin-top: 30px;
  }
`;
