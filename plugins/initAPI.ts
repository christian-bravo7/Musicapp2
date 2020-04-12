import { Context } from '@nuxt/types';
import { APIClient } from '@/api';

export default function ({ $axios }: Context) {
  APIClient.setInstance($axios);
}
