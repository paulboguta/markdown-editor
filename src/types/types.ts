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
  id: string;
}

export interface IDocumentsState {
  documents: IDocument[];
  loading?: boolean;
}

export interface IUser {
  email: string;
  uid: string;
}
