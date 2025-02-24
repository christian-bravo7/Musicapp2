import { Store } from 'vuex';
import { initializeStores } from '@/utils/initializeStore';

const initializer = (store: Store<any>) => initializeStores(store);

export const plugins = [initializer];
export * from '@/utils/initializeStore';
