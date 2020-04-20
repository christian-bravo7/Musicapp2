import { Context } from '@nuxt/types';
import { AxiosError } from 'axios';
import onRequestHandler from '@/utils/axios/onRequestHandler';

export default function ({ $axios }: Context) {
  $axios.onRequest(onRequestHandler);
  $axios.onError((error: AxiosError) => {
    console.log(error);
  });
}
