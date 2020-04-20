/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import auth from '@/store/auth';
import user from '@/store/user';

let authStore: auth;
let userStore: user;

function initializeStores (store: Store<any>): void {
  authStore = getModule(auth, store);
  userStore = getModule(user, store);
}

export {
  initializeStores,
  authStore,
  userStore,
};
