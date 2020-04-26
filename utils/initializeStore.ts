/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import auth from '@/store/auth';
import user from '@/store/user';
import settings from '@/store/settings';
import albums from '@/store/albums';
import categories from '@/store/categories';
import playlists from '@/store/playlists';

let authStore: auth;
let userStore: user;
let settingsStore: settings;
let albumsStore: albums;
let categoriesStore: categories;
let playlistsStore: playlists;

function initializeStores (store: Store<any>): void {
  authStore = getModule(auth, store);
  userStore = getModule(user, store);
  settingsStore = getModule(settings, store);
  albumsStore = getModule(albums, store);
  categoriesStore = getModule(categories, store);
  playlistsStore = getModule(playlists, store);
}

export {
  initializeStores,
  authStore,
  userStore,
  settingsStore,
  albumsStore,
  categoriesStore,
  playlistsStore,
};
