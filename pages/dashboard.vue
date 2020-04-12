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
import { requestAccessToken } from '@/api/auth';

@Component
export default class Dashboard extends Vue {
  async request () {
    const { code } = this.$route.query;
    const response = await requestAccessToken(code);
    console.log(response);
  }
}
</script>

<style>

</style>
