import { Context } from '@nuxt/types';
import VuexPersistence from 'vuex-persist';

export default function ({ store }: Context) {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['auth'],
  }).plugin(store);
}
