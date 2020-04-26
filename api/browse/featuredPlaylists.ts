import { APIClient } from '@/api';
import { setApiURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function getFeaturedPlaylists (): Promise<any> {
  setApiURL();

  const { data } = await APIClient.getInstance()
    .get('/browse/featured-playlists?country=GT&offset=0&limit=20');

  const response = new TransformData(data).toCamelCase('_');

  const playlists = response.playlists.items;

  return playlists;
}
