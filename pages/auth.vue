<template>
  <div />
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import { Component, Vue } from 'nuxt-property-decorator';
import { authStore } from '@/store';

@Component({
  layout: 'authenticated',
  async middleware ({ route, redirect, app }: Context) {
    const { code } = route.query;
    await authStore.requestAccessToken(code as string);
    redirect(app.localePath('dashboard'));
  },
})
export default class ComingSoonPage extends Vue {}
</script>
