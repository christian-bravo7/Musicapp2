import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { requestAccessToken } from '@/api/auth';
import { Dictionary } from '@/utils/models';

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
export default class AuthStore extends VuexModule {
  requestTokenData: Dictionary = {
    accessToken: '',
    tokenType: 'Basic',
    expirationTime: 0,
    refreshToken: '',
    scope: '',
  };

  @Mutation
  setRequestTokenData (requestTokenData: Dictionary) {
    this.requestTokenData = requestTokenData;
  }

  @Action({ rawError: true })
  async requestAccessToken (code: string): Promise<void> {
    const response = await requestAccessToken(code);
    this.setRequestTokenData(response);
  }

  @Action({ rawError: true })
  async refreshAccessToken (refreshToken: string): Promise<void> {
    const response = await requestAccessToken(refreshToken);
    this.setRequestTokenData(response);
  }
}
