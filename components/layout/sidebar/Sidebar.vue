<template>
  <aside class="sidebar">
    <SidebarProfile v-bind="profileInfo" />
    <section>
      <SidebarLibrary />
    </section>
    <div class="sidebar__footer">
      <ThemeSwitch />
      <LanguagePicker />
    </div>
    <img
      class="sidebar__bg-image"
      src="~assets/img/background-listening-music.png"
      alt=""
    >
  </aside>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { userStore } from '@/store';

import LanguagePicker from '@/components/LanguagePicker.vue';
import SidebarProfile from '@/components/layout/sidebar/SidebarProfile.vue';
import SidebarLibrary from '@/components/layout/sidebar/SidebarLibrary.vue';
import ThemeSwitch from '@/components/theme/ThemeSwitch.vue';

import gravatarEncoded from '@/utils/gravatarEncoded';

@Component({
  components: {
    LanguagePicker,
    SidebarProfile,
    SidebarLibrary,
    ThemeSwitch,
  },
})
export default class Sidebar extends Vue {
  get avatar () {
    const picture = userStore.profile.images[0].url;
    const email = userStore.profile.email;
    return picture || gravatarEncoded(email);
  }

  get profileInfo () {
    const username = userStore.profile.displayName;

    return {
      username,
      avatar: this.avatar,
    };
  }
}

</script>

<style lang="scss" scoped>

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--background-200);
  border-radius: 0 rem(40) rem(40) 0;

  &__bg-image {
    position: absolute;
    pointer-events: none;
    filter: opacity(0.3);
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: rem(16);
  }
}

</style>
