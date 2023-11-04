import { IUser } from './User';

export interface IDocument {
  id: string;
  title: string;
  keywords: string[];
  path: string;
  author: (IUser & {
    documentId: string;
  })[];
}
