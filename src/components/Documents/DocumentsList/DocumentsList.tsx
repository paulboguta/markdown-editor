import { getCurrentDocumentData } from "features/documents/documents.service";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useAppDispatch } from "hooks/hooks";
import { setCurrentDocumentAction } from "redux/actions/currentDocumentActions";
import { ReactComponent as IconDocument } from "../../../assets/icon-document.svg";
import { Wrapper } from "./DocumentsList.styles";

export const DocumentsList = () => {
  const { loading, documents }: { loading: boolean; documents: string[] } =
    useSelector((state: RootState) => state.documentReducer);
  const dispatch = useAppDispatch();

  const onClickDocument = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentDoc = getCurrentDocumentData(
      event.currentTarget.id,
      documents
    );
    dispatch(setCurrentDocumentAction(currentDoc));
  };
  return (
    <Wrapper>
      {loading ? (
        <p style={{ color: "#fff" }}>Data is loading...</p>
      ) : (
        documents.map((doc: any) => {
          const { id } = doc;
          return (
            <li key={id}>
              <IconDocument />
              <button
                type="submit"
                onClick={onClickDocument}
                name={doc.title}
                id={id}
              >
                {doc.title}
              </button>
            </li>
          );
        })
      )}
    </Wrapper>
  );
};
