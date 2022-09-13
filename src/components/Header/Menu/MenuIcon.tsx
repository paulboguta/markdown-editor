import IconMenu from "../../../assets/icon-menu.svg";
import IconClose from "../../../assets/icon-close.svg";
import styled from "styled-components";

export const MenuIcon = () => {
  return (
    <Wrapper>
      <img src={IconMenu} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.dark.a700};
  border: none;
  cursor: pointer;
  margin-right: 24px;

  @media (max-width: 767px) {
    height: 56px;
    width: 56px;
  }

  @media (min-width: 768px) {
    height: 72px;
    width: 72px;
  }
`;
