import { IUser } from '../../types/User';
import { httpClient } from '../httpClient';

export default async function me() {
  const { data } = await httpClient.get<IUser>('/users/me');

  return data;
}
