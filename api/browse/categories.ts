import { APIClient } from '@/api';
import { setApiURL } from '@/utils/axios/switchBaseURL';
import TransformData from '@/utils/transformData';

export async function getCategories (): Promise<any> {
  setApiURL();

  const { data } = await APIClient.getInstance()
    .get('/browse/categories?country=GT&offset=0&limit=20');

  const response = new TransformData(data).toCamelCase('_');

  const categories = response.categories.items;

  return categories;
}
