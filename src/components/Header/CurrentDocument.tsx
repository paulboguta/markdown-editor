import styled from "styled-components";

const Wrapper = styled.div`
  @media (max-width: 768px) {
    height: 56px;
    display: flex;
    align-items: center;
  }
`;

// const Document = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   grid-template-rows: repeat(2, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   margin-left: 24px;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;

//   svg {
//     grid-area: 1 / 1 / 3 / 2;
//     align-self: center;
//   }
// `;

// const Text = styled.div`
//   font-weight: 300;
//   color: #7c8187;
//   font-size: 13px;
//   grid-area: 1 / 2 / 2 / 3;
// `;

// const DocumentName = styled.div`
//   font-size: 15px;
//   grid-area: 2 / 2 / 3 / 3;
//   color: #fff;
// `;

// const WrapperModal = styled.div`
//   background: #c1c4cb;
//   width: 340px;
//   height: 200px;
//   border-radius: 4px;
//   position: fixed;
//   top: 20%;
//   left: 50%;
//   transform: translate(-50%, -20%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 768px) {
//     width: 270px;
//   }

//   input {
//     outline: none;
//     border: none;
//     width: 200px;
//     height: 30px;
//     border-radius: 4px;
//     margin-bottom: 50px;
//     margin-top: 30px;
//   }
// `;

// const ButtonX = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   left: 10px;
// `;

// const ButtonConfirm = styled.button`
//   border: none;
//   background-color: #e46643;
//   width: 202px;
//   height: 40px;
//   font-size: 15px;
//   color: white;
//   border-radius: 4px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background: ${(props) => props.theme.orangeHover};
//     transition: 0.3s ease-in;
//   }
// `;

export const CurrentDocument = () => {
  // const [documentClicked, setDocumentClicked] = useState<boolean>(false);
  // const [newTitle, setNewTitle] = useState<string>("");
  // const [showTitle, setShowTitle] = useState<string>("");
  // const dispatch = useAppDispatch();

  // const onClickShowModal = () => {
  //   setDocumentClicked((documentClicked) => !documentClicked);
  // };

  // const onClickChangeNameHideModal = () => {
  //   const currentDocs = documents.map((doc: any) => doc.title);
  //   if (currentDocs.includes(newTitle)) {
  //     alert("This document name is already taken! Try another one");
  //   } else if (newTitle.length > 15) {
  //     alert("Document name can't exceed 15 characters. Try another name");
  //   } else if (newTitle.length < 3) {
  //     alert("Document name has to be at least 3 characters. Try another name");
  //   } else {
  //     dispatch(editDocumentName(newTitle, currentDocID));
  //     setShowTitle(newTitle);
  //     setNewTitle("");
  //     docNameChangedHandler();
  //     setDocumentClicked((documentClicked) => !documentClicked);
  //   }
  // };

  // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setNewTitle(event.target.value);
  // };

  // useEffect(() => {
  //   setShowTitle(currentDocTitle);
  // }, [currentDocTitle]);

  return (
    <Wrapper>
      {/* <Document onClick={onClickShowModal}>
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
            fill="#FFF"
          />
        </svg>
        <Text>Document Name</Text>
        <DocumentName>{!deleteClicked && showTitle}.md</DocumentName>
      </Document>
      {documentClicked && (
        <WrapperModal>
          <h4>New document name:</h4>
          <input
            type="text"
            placeholder="Document Name"
            onChange={changeHandler}
            value={newTitle}
          />
          <ButtonConfirm onClick={onClickChangeNameHideModal}>
            Confirm
          </ButtonConfirm>
          <ButtonX onClick={onClickShowModal}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
                <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
              </g>
            </svg>
          </ButtonX>
        </WrapperModal>
      )} */}
    </Wrapper>
  );
};
