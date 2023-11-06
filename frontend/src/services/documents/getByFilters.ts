import { IDocument } from '../../types/Document';
import { httpClient } from '../httpClient';

interface DocumentResponse {
  documents: IDocument[];
  pages: {
    total: number;
    hasNext: boolean;
  };
}

export async function getByFilters(filter: string, queries: string) {
  const transformedString = queries.replace(/\s+/g, '');

  const splittedQuery = transformedString.split(',');
  let s = '';
  for (let query = 0; query < splittedQuery.length; query++) {
    s += `${filter}=${splittedQuery[query]}${
      query === splittedQuery.length - 1 ? '' : '&'
    }`;
  }

  const { data } = await httpClient.get<DocumentResponse>(`/documents?${s}`);
  return data;
}
