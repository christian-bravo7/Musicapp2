<template>
  <div class="container">
    <button @click="login">
      Login
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class IndexPage extends Vue {}
</script>

<style>

</style>
