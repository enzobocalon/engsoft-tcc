import { ITags } from '../../types/Tags';
import { httpClient } from '../httpClient';

export async function getKeywords(query: string) {
  const { data } = await httpClient.get<ITags[]>(
    `/documents/keywords?q=${query}`
  );
  return data;
}
