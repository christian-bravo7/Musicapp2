import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { Dictionary } from '@/utils/models';
import { retrieveUserProfile } from '@/api/user';

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class UserStore extends VuexModule {
  profile: Dictionary = {
    country: null,
    displayName: null,
    email: null,
    explicitContent: {
      filter_enabled: false,
      filter_locked: false,
    },
    externalUrls: {
      spotify: null,
    },
    followers: {
      href: null,
      total: 0,
    },
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  };

  @Mutation
  setProfile (profileData: Dictionary) {
    this.profile = profileData;
  }

  @Action({ rawError: true })
  async retrieveUserProfile (): Promise<void> {
    const response = await retrieveUserProfile();
    this.setProfile(response);
  }
}
