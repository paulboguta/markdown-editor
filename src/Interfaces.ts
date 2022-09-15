export interface IAppHeadingsProps {
  type: string;
  children: any;
}

export interface IStyleProps {
  type: string;
}

export interface IDocument {
  title: string;
  text: string;
  uid: string;
}

export interface IDocumentsState {
  documents: Document[];
}
