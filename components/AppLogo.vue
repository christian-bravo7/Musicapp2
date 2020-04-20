<template>
  <NuxtLink
    :to="localePath('index')"
    class="logo"
    :class="{ 'logo--spacing-right': wordmark }"
  >
    <figure
      class="logo__thumbnail"
      :class="{ 'logo__thumbnail--spacing-right': wordmark }"
    >
      <img
        class="logo__image"
        src="~/assets/img/logo.png"
        alt="logo"
      >
    </figure>
    <p
      v-if="wordmark"
      class="logo__wordmark"
    >
      musicapp
      <span class="logo__country">
        {{ country }}
      </span>
    </p>
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class AppLogo extends Vue {
  @Prop({ type: Boolean }) wordmark!: boolean;
  @Prop({ type: String }) country!: string;
}

</script>

<style lang="scss" scoped>

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;

  &--spacing-right {
    margin-right: rem(8);
  }

  &__thumbnail {
    width: rem(70);
    height: rem(70);
    transition: all 0.3s ease;

    &--spacing-right {
      margin-right: rem(4);
    }

    &:hover {
      transform: scale(1.05) rotate(2deg);
    }
  }

  &__wordmark {
    position: relative;
  }

  &__country {
    font-size: em(10);
    position: absolute;
    top: rem(-2);
    left: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
  }
}

</style>
