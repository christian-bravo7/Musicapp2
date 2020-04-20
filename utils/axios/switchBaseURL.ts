import { APIClient } from '@/api';

const authURL = process.env.authURL;
const apiURL = process.env.apiURL;

export function setAuthURL () {
  APIClient.getInstance().setBaseURL(authURL as string);
}

export function setApiURL () {
  APIClient.getInstance().setBaseURL(apiURL as string);
}
