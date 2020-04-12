import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'guest',
  stateFactory: true,
  namespaced: true,
})
export default class GuestStore extends VuexModule {
  theme: string = 'light';

  get currentTheme (): string {
    return this.theme;
  }

  get hasDarkTheme (): boolean {
    return this.theme === 'dark';
  }

  @Mutation
  changeTheme (theme: string): void {
    this.theme = theme;
  }
}
