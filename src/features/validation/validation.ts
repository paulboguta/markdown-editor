/* eslint-disable no-alert */
export const validateNewDoc = async (
  newDocName: string,
  currentDocs: Promise<{ title: any }[]>
) => {
  const docs = (await currentDocs).map((doc) => doc.title);

  if (docs.includes(newDocName)) {
    alert("This document name is already taken! Try another one");
    return false;
  }
  if (newDocName.length > 15) {
    alert("Document name can't exceed 15 characters. Try another name");
    return false;
  }
  if (newDocName.length < 3) {
    alert("Document name has to be at least 3 characters. Try another name");
    return false;
  }
  return true;
};
