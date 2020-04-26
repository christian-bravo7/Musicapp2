<template>
  <main class="authenticated">
    <Sidebar class="authenticated__sidebar" />
    <section class="authenticated__main">
      <DashboardTopBar />
      <section class="authenticated__content">
        <nuxt />
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

import LanguagePicker from '@/components/LanguagePicker.vue';
import Sidebar from '@/components/layout/sidebar/Sidebar.vue';
import DashboardTopBar from '@/components/layout/DashboardTopBar.vue';
import { settingsStore } from '@/store';

@Component({
  components: {
    LanguagePicker,
    Sidebar,
    DashboardTopBar,
  },
  head (): MetaInfo {
    return {
      bodyAttrs: {
        'data-theme': settingsStore.theme,
      },
    };
  },
})
export default class AuthenticatedLayout extends Vue {
  get spotifyAPILink (): string {
    return 'https://developer.spotify.com/';
  }
}

</script>

<style lang="scss" scoped>
.authenticated {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: var(--background-100);

  &__sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;
  }

  &__main {
    padding-left: 250px;
    display: flex;
    flex-direction: column;
  }

  &__content {
    padding: rem(16);
  }
}

.footer {
  &__copyright-text {
    margin-right: rem(10);

    /deep/ a {
      text-decoration: none;
    }
  }
}
</style>
