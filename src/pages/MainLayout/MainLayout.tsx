import { useContext, useState } from "react";
import { Markdown } from "components/Markdown/Markdown";
import { Preview } from "components/Preview/Preview";
import { useWindowDimensions } from "hooks/hooks";
import { Button, Wrapper } from "./MainLayout.styles";
import { ReactComponent as IconShow } from "../../assets/icon-show-preview.svg";
import { ReactComponent as IconHide } from "../../assets/icon-hide-preview.svg";
import { MenuContext } from "../../contexts/MenuContext";
import { CreateDocForm } from "../../components/Documents/CreateDocument/CreateDocForm";

export const MainLayout = () => {
  const [showPreview, setShowPreview] = useState<boolean>(true);
  const windowDimensions = useWindowDimensions();
  const { showNewDocumentForm } = useContext(MenuContext);

  const onClickButtonShowPreview = (): void => {
    setShowPreview(!showPreview);
  };

  return (
    <Wrapper>
      {showNewDocumentForm && <CreateDocForm />}
      {/* Mobile */}
      {windowDimensions.width < 768 && showPreview && (
        <Preview width={windowDimensions.width} />
      )}
      {windowDimensions.width < 768 && !showPreview && (
        <Markdown showPreview={showPreview} />
      )}
      {/* Desktop */}
      {windowDimensions.width > 768 && <Markdown showPreview={showPreview} />}
      {windowDimensions.width > 768 && showPreview && (
        <Preview width={windowDimensions.width} />
      )}
      <Button onClick={onClickButtonShowPreview}>
        {!showPreview && <IconShow />}
        {showPreview && <IconHide />}
      </Button>
    </Wrapper>
  );
};
