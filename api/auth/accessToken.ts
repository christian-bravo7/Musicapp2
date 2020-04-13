import { stringify } from 'qs';
import { APIClient } from '@/api';
import TransformData from '@/utils/transformData';

export async function requestAccessToken (code: string) {
  const clientID = process.env.clientID;
  const clientSecret = process.env.clientSecret;
  const redirectURL = process.env.redirectURL;
  const encodedAuthorization = Buffer.from(clientID + ':' + clientSecret).toString('base64');

  const encodedParams = stringify({
    grant_type: 'authorization_code',
    redirect_uri: redirectURL,
    code,
  });

  const requestConfig = {
    headers: {
      Authorization: 'Basic ' + encodedAuthorization,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const { data } = await APIClient.getInstance()
    .post('/api/token', encodedParams, requestConfig);

  const response = new TransformData(data).toCamelCase('_');
  return response;
}
