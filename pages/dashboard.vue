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
import { authStore } from '@/store';

@Component
export default class Dashboard extends Vue {
  async request () {
    const { code } = this.$route.query;
    await authStore.requestAccessToken(code as string);
  }
}
</script>

<style>

</style>
