import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { getFeaturedPlaylists } from '@/api/browse';
import { Dictionary } from '@/utils/models';

@Module({
  name: 'playlists',
  stateFactory: true,
  namespaced: true,
})
export default class CategoriesStore extends VuexModule {
  featuredPlaylists: Array<Dictionary> = [];

  get playlists () {
    return this.featuredPlaylists;
  }

  @Mutation
  setPlaylists (playlists: Array<Dictionary>): void {
    this.featuredPlaylists = playlists;
  }

  @Action({ rawError: true })
  async retrieveFeaturedPlaylists (): Promise<void> {
    const response = await getFeaturedPlaylists();
    this.setPlaylists(response);
  }
}
