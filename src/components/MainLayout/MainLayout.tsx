import { Markdown } from "../Markdown/Markdown";
import { Preview } from "../Preview/Preview";
import styled from "styled-components";
import { useState, useContext } from "react";
import IconShow from "../../assets/icon-show-preview.svg";
import IconHide from "../../assets/icon-hide-preview.svg";
import { useWindowDimensions } from "../../hooks/hooks";
import { MenuContext } from "../../contexts/MenuContext";
import { CreateDocForm } from "../Documents/CreateDocForm";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";

export const MainLayout = () => {
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const windowDimensions = useWindowDimensions();
  const { showNewDocumentForm } = useContext(MenuContext);
  const { changeHandler, markdownInput } = useContext(CurrentDocumentContext);

  const clickHandler = (): void => {
    setShowPreview((showPreview) => !showPreview);
  };
  return (
    <Wrapper>
      {showNewDocumentForm && <CreateDocForm />}
      {+windowDimensions.width < 768 && showPreview && (
        <Preview
          showPreview={showPreview}
          width={+windowDimensions.width}
          markdownInput={markdownInput}
        />
      )}
      {+windowDimensions.width < 768 && !showPreview && (
        <Markdown
          showPreview={showPreview}
          markdownInput={markdownInput}
          changeHandler={changeHandler}
        />
      )}
      {+windowDimensions.width > 768 && (
        <Markdown
          showPreview={showPreview}
          markdownInput={markdownInput}
          changeHandler={changeHandler}
        />
      )}
      {+windowDimensions.width > 768 && showPreview && (
        <Preview
          showPreview={showPreview}
          width={+windowDimensions.width}
          markdownInput={markdownInput}
        />
      )}
      <Button onClick={clickHandler}>
        {!showPreview && <img src={IconShow} />}
        {showPreview && <img src={IconHide} />}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
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
