import { APIClient } from '@/api';
import { setApiURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function getNewReleases (): Promise<any> {
  setApiURL();

  const { data } = await APIClient.getInstance()
    .get('/browse/new-releases?country=GT&offset=0&limit=20');

  const response = new TransformData(data).toCamelCase('_');

  const albums = response.albums.items;

  return albums;
}
