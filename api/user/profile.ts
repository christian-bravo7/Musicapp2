import { APIClient } from '@/api';
import { setApiURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function retrieveUserProfile (): Promise<any> {
  setApiURL();

  const { data } = await APIClient.getInstance()
    .get('/me');

  const response = new TransformData(data).toCamelCase('_');

  console.log(response);

  return response;
}
