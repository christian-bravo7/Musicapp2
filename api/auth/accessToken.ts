import { stringify } from 'qs';
import { APIClient } from '@/api';
import { setAuthURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function requestAccessToken (code: string): Promise<any> {
  setAuthURL();

  const redirectURL = process.env.redirectURL;

  const accessTokenParams = stringify({
    grant_type: 'authorization_code',
    redirect_uri: redirectURL,
    code,
  });

  const { data } = await APIClient.getInstance()
    .post('/api/token', accessTokenParams);

  const response = new TransformData(data).toCamelCase('_');

  return response;
}
