import { httpClient } from '../httpClient';

export interface SigninParams {
  name: string;
  password: string;
}

interface SigninResponse {
  accessToken: string;
}

export default async function signin(params: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>(
    '/auth/signin',
    params
  );

  return data;
}
