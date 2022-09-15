import { Markdown } from "../Markdown/Markdown";
import { Preview } from "../Preview/Preview";
import styled from "styled-components";
import { useState, ChangeEvent, useContext } from "react";
import IconShow from "../../assets/icon-show-preview.svg";
import IconHide from "../../assets/icon-hide-preview.svg";
import { useWindowDimensions } from "../../hooks";
import { MenuContext } from "../../contexts/MenuContext";
import { CreateDocForm } from "../Documents/CreateDocForm";

interface IMainProps {
  changeHandler(event: ChangeEvent<HTMLTextAreaElement>): void;
  markdownInput: string;
}

export const MainLayout = ({ changeHandler, markdownInput }: IMainProps) => {
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const windowDimensions = useWindowDimensions();
  const { showNewDocumentForm } = useContext(MenuContext);

  const clickHandler = (): void => {
    setShowPreview((showPreview) => !showPreview);
    console.log(windowDimensions);
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
      <button onClick={clickHandler}>
        {!showPreview && <img src={IconShow} />}
        {showPreview && <img src={IconHide} />}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  button {
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
  }
`;
