<template>
  <div class="container">
    <p>Dashboard</p>
    <button @click="request">
      request
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { userStore } from '@/store';
import { getNewReleases } from '@/api/browse';

@Component({
  head () {
    return {
      titleTemplate: '%s | Dashboard',
    };
  },
  layout: 'authenticated',
  async middleware () {
    await userStore.retrieveUserProfile();
    await getNewReleases();
  },
})
export default class Dashboard extends Vue {
  async request () {
    await userStore.retrieveUserProfile();
  }
}
</script>

<style lang="scss" scoped>

</style>
