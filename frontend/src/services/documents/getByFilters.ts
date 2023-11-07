import { IDocument } from '../../types/Document';
import { httpClient } from '../httpClient';

interface DocumentResponse {
  documents: IDocument[];
  pages: {
    total: number;
    hasNext: boolean;
  };
}

export async function getByFilters(
  filter: string,
  queries: string,
  page: number = 1
) {
  const splittedQuery = queries.split(',');
  let s = '';
  for (let query = 0; query < splittedQuery.length; query++) {
    splittedQuery[query] = splittedQuery[query].trim();
    s += `${filter}=${splittedQuery[query]}${
      query === splittedQuery.length - 1 ? '' : '&'
    }`;
  }

  const { data } = await httpClient.get<DocumentResponse>(
    `/documents?${s}&page=${page}`
  );
  return data;
}
