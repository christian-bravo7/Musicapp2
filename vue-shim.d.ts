import VueI18n, { IVueI18n } from 'vue-i18n/types';
import Vue from 'vue';
import { Route, RawLocation } from 'vue-router';

declare module '*.vue' {
  export default Vue;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'vue/types/vue' {
  interface Vue {
    $t: typeof VueI18n.prototype.t;
    localePath(route: RawLocation, locale?: string): string
    switchLocalePath(locale: string): string
    getRouteBaseName(route?: Route): string
    readonly $i18n: VueI18n & IVueI18n
  }
}
