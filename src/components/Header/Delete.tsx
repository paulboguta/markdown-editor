import { useContext } from "react";
import styled from "styled-components";
import { CurrentDocumentContext } from "../../contexts/CurrentDocumentContext";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteDocument } from "../../redux/actions/documentActions";

interface IProps {
  clickHandler(): void;
}

export const Delete = ({ clickHandler }: IProps) => {
  const { currentDocTitle, currentDocID } = useContext(CurrentDocumentContext);
  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    dispatch(deleteDocument(currentDocID, currentDocTitle));
    clickHandler();
  };

  return (
    <Wrapper>
      <h5>Are you sure you to delete {currentDocTitle}.md?</h5>
      <Flex>
        <button onClick={clickHandler}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
              <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
            </g>
          </svg>
        </button>
        <button onClick={onClickDelete}>
          <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
              fill="#7C8187"
            />
          </svg>
        </button>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  background-color: #c1c4cb;
  border-radius: 8px;
  width: 300px;
  height: 100px;
  top: 200px;
  left: 40%;

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

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
