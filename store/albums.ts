import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { getNewReleases } from '@/api/browse';
import { Dictionary } from '@/utils/models';

@Module({
  name: 'albums',
  stateFactory: true,
  namespaced: true,
})
export default class AlbumsStore extends VuexModule {
  localeAlbums: Array<Dictionary> = [];

  get albums () {
    return this.localeAlbums;
  }

  @Mutation
  setLocaleAlbums (albums: Array<Dictionary>): void {
    this.localeAlbums = albums;
  }

  @Action({ rawError: true })
  async retrieveNewLocaleAlbums (): Promise<void> {
    const response = await getNewReleases();
    this.setLocaleAlbums(response);
  }
}
