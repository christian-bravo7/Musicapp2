import { stringify } from 'qs';
import { APIClient } from '@/api';
import { setAuthURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function refreshAccessToken (refreshToken: string): Promise<any> {
  setAuthURL();

  const refreshTokenParams = stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const { data } = await APIClient.getInstance()
    .post('/api/token', refreshTokenParams);

  const response = new TransformData(data).toCamelCase('_');

  return response;
}
