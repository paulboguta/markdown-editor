import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    height: 56px;
    display: flex;
    align-items: center;
  }
`;

export const Document = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    grid-area: 1 / 1 / 3 / 2;
    align-self: center;
  }
`;

export const Text = styled.div`
  font-weight: 300;
  color: #7c8187;
  font-size: 13px;
  grid-area: 1 / 2 / 2 / 3;
`;

export const DocumentName = styled.div`
  font-size: 15px;
  grid-area: 2 / 2 / 3 / 3;
  color: #fff;
`;

export const WrapperModal = styled.div`
  background: #c1c4cb;
  width: 340px;
  height: 200px;
  border-radius: 4px;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 270px;
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

export const ButtonX = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;
