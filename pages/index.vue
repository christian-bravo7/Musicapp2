<template>
  <div class="container">
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { requestLogin } from '@/api/auth';

@Component
export default class IndexPage extends Vue {
  login () {
    requestLogin();
  }
}
</script>

<style>

</style>
