import styled from "styled-components";

export const Wrapper = styled.ul`
  height: 50vh;
  margin-top: 30px;
  margin-bottom: 100px;
  overflow-y: auto;
  background-color: #2b2d31;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 25px;
    margin-top: 5px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: #fff;
      font-family: "Roboto Mono", sans-serif;

      &:hover {
        color: ${(props) => props.theme.orange};
        transition: 0.3s ease-in;
      }
    }
  }
`;
