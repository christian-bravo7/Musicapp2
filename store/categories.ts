import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import { getCategories } from '@/api/browse';
import { Dictionary } from '@/utils/models';

@Module({
  name: 'categories',
  stateFactory: true,
  namespaced: true,
})
export default class CategoriesStore extends VuexModule {
  categorieList: Array<Dictionary> = [];

  get categories () {
    return this.categorieList;
  }

  @Mutation
  setCategories (categories: Array<Dictionary>): void {
    this.categorieList = categories;
  }

  @Action({ rawError: true })
  async retrieveCategories (): Promise<void> {
    const response = await getCategories();
    this.setCategories(response);
  }
}
