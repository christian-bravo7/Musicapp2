<template>
  <main class="landing-layout">
    <nav class="landing-layout__navbar">
      <AppLogo />
    </nav>
    <section>
      <nuxt />
    </section>
    <footer class="landing-layout__footer">
      <p
        class="footer__copyright-text"
        v-html="$md($t('landing.footer-api-reference-link', { spotifyAPILink }))"
      />
      <LanguagePicker />
    </footer>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import LanguagePicker from '@/components/LanguagePicker.vue';
import AppLogo from '@/components/AppLogo.vue';

@Component({
  components: {
    LanguagePicker,
    AppLogo,
  },
})
export default class LandingLayout extends Vue {
  get spotifyAPILink (): string {
    return 'https://developer.spotify.com/';
  }
}

</script>

<style lang="scss" scoped>
.landing-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;

  &__navbar {
    display: flex;
    justify-content: flex-end;
    padding: rem(10);
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: rem(5) rem(10);
    font-size: em(14);

    @media screen and (max-width: 700px) {
      font-size: em(12);
    }
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
