import { IDocument } from '../../types/Document';
import { httpClient } from '../httpClient';

export async function create(formData: FormData) {
  const response = await httpClient.post<IDocument>('/documents', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
}
