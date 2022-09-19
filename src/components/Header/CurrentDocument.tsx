import { useContext } from "react";
import styled from "styled-components";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

export const CurrentDocument = () => {
  const { currentDocTitle } = useContext(CurrentDocumentContext);
  return (
    <Wrapper>
      <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
          fill="#FFF"
        />
      </svg>
      <Text>Document Name</Text>
      <DocumentName>{currentDocTitle}.md</DocumentName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 24px;

  svg {
    grid-area: 1 / 1 / 3 / 2;
    align-self: center;
  }
`;

const Text = styled.div`
  font-weight: 300;
  color: #7c8187;
  font-size: 13px;
  grid-area: 1 / 2 / 2 / 3;
`;

const DocumentName = styled.div`
  font-size: 15px;
  grid-area: 2 / 2 / 3 / 3;
  color: #fff;
`;
