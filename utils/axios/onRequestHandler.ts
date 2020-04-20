import { AxiosRequestConfig } from 'axios';
import { authStore } from '@/store';

export default function onRequestHandler (config: AxiosRequestConfig) {
  const tokenType = authStore.requestTokenData.tokenType;
  const authroization = authStore.requestTokenData.accessToken || encodeAuthorization();
  const headers = {
    ...config.headers,
    Authorization: `${tokenType} ${authroization}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  config.headers = headers;
}

function encodeAuthorization () {
  const clientID = process.env.clientID;
  const clientSecret = process.env.clientSecret;
  const encodedAuthorization = Buffer.from(clientID + ':' + clientSecret).toString('base64');

  return encodedAuthorization;
}
