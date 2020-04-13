/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import guest from '@/store/guest';
import auth from '@/store/auth';

let guestStore: guest;
let authStore: auth;

function initialiseStores (store: Store<any>): void {
  guestStore = getModule(guest, store);
  authStore = getModule(auth, store);
}

export {
  initialiseStores,
  guestStore,
  authStore,
};
