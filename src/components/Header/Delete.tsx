import styled from "styled-components";
import { ReactComponent as IconClose } from "assets/icon-close.svg";
import { ReactComponent as IconDelete } from "assets/icon-delete.svg";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAppDispatch } from "hooks/hooks";
import { deleteDocument } from "redux/actions/documentActions";
import { Button } from "components/Buttons/Button";

interface IProps {
  onClickCloseDeleteModal(): void;
}

const Wrapper = styled.div`
  position: fixed;
  background-color: #c1c4cb;
  border-radius: 8px;
  width: 300px;
  height: 100px;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    font-weight: 300;
    margin-bottom: 30px;
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Delete = ({ onClickCloseDeleteModal }: IProps) => {
  const { id } = useSelector(
    (state: RootState) => state.currentDocumentReducer
  );
  const { uid } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    onClickCloseDeleteModal();
    dispatch(deleteDocument(uid, id));
  };

  return (
    <Wrapper>
      <h5>Are you sure you to delete .md?</h5>
      <Flex>
        <Button backgroundColor="transparent" onClick={onClickCloseDeleteModal}>
          <IconClose />
        </Button>
        <Button backgroundColor="transparent" onClick={onClickDelete}>
          <IconDelete />
        </Button>
      </Flex>
    </Wrapper>
  );
};
