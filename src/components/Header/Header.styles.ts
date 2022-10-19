import styled from "styled-components";

interface IWrapperStyle {
  menuClicked: boolean;
}

export const Wrapper = styled.div<IWrapperStyle>`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100vw;
  background-color: #2b2d31;
  margin-left: ${(props) => (props.menuClicked ? "250px" : "0px")};

  @media (max-width: 768px) {
    height: 56px;
  }
  position: fixed;
  top: 0;
`;

export const SaveChanges = styled.div`
  font-weight: 400;
  font-size: 15px;

  @media (max-width: 767px) {
    width: 40px;
    display: none;
  }
`;
