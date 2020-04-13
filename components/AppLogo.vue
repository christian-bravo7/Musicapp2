<template>
  <NuxtLink
    :to="localePath('index')"
    class="logo"
  >
    <figure
      class="logo__figure"
    >
      <img
        class="logo__image"
        src="~/assets/img/logo.png"
        alt="logo"
      >
    </figure>
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppLogo extends Vue {}

</script>

<style lang="scss" scoped>

.logo {
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1) rotate(5deg);
  }
  &__figure {
    width: rem(70);
    height: rem(70);

    @media screen and (max-width: 720px) {
      width: rem(60);
      height: rem(60);
    }
  }
  &__image {
    width: 100%;
    height: 100%;
  }
}

</style>
