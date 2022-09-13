import styled from "styled-components";

interface IPreviewProps {
  showPreview: boolean;
  width: number;
}

interface IPreviewStyle {
  w: string;
}

export const Preview = ({ showPreview, width }: IPreviewProps) => {
  let w = width > 768 ? "50vw" : "100vw";

  return (
    <Wrapper>
      <Header w={w}>
        <div>Preview</div>
      </Header>
      <TextArea w={w} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const Header = styled.div<IPreviewStyle>`
  height: 42px;
  width: ${(props) => props.w};
  background-color: ${(props) => props.theme.dark.a200};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${(props) => props.theme.dark.a500};
    margin-right: 60px;

    display: flex;
    align-items: center;
  }

  img {
    margin-right: 20px;
  }
`;

const TextArea = styled.div<IPreviewStyle>`
  border: none;
  border-left: 1px solid ${(props) => props.theme.dark.a300};
  width: ${(props) => props.w};
  height: 100vh;
`;
