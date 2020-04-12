import { NuxtAxiosInstance } from '@nuxtjs/axios';

export class APIClient {
  private axios: NuxtAxiosInstance;
  private static instance: APIClient;

  constructor (axios: NuxtAxiosInstance) {
    this.axios = axios;
  }

  static getInstance (): NuxtAxiosInstance {
    return APIClient.instance.axios;
  }

  static setInstance (axios: NuxtAxiosInstance) {
    APIClient.instance = new APIClient(axios);
  }
}
