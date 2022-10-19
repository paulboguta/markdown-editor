import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
`;

export const WrapperSlider = styled.div`
  background-color: #1d1f22;
  width: 250px;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  ul {
    height: 50vh;
    margin-top: 30px;
    margin-bottom: 100px;
    overflow-y: auto;
    background-color: #2b2d31;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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

export const HS = styled.div`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7c8187;
  white-space: nowrap;
  margin-top: 10px;
`;

// export const Username = styled.div`
//   color: #fff;
//   opacity: 0.5;
//   margin-top: 20px;
// `;

export const WrapperMenuIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #35393f;
  border: none;
  cursor: pointer;
  margin-right: 24px;
  top: 0;
  left: 0;
  z-index: 99;

  &:hover {
    background-color: #e46643;
    transition: 0.3s ease-in;
  }

  @media (max-width: 767px) {
    height: 56px;
    width: 56px;
  }

  @media (min-width: 768px) {
    height: 72px;
    width: 72px;
  }
`;
