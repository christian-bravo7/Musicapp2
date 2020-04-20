<template>
  <section class="landing-page">
    <figure class="landing-page__image">
      <img src="~assets/img/music-illustration.png" alt="">
    </figure>
    <section class="landing-page__information">
      <div class="landing-page__banner-text">
        <p>
          {{ $t('landing.banner-text') }}
        </p>
        <Typer :words="words" />
      </div>
      <a
        class="landing-page__login-button"
        :href="loginURL"
      >
        {{ $t('landing.start-label') }}
      </a>
    </section>
  </section>
</template>

<script lang="ts">
import { stringify } from 'qs';
import { Component, Vue } from 'nuxt-property-decorator';
import Typer from '@/components/Typer.vue';
import LanguagePicker from '@/components/LanguagePicker.vue';
import AppLogo from '@/components/AppLogo.vue';

@Component({
  layout: 'landing-layout',
  components: {
    Typer,
    LanguagePicker,
    AppLogo,
  },
})
export default class IndexPage extends Vue {
  get words (): string[] {
    return [
      this.$t('landing.banner-word-1') as string,
      this.$t('landing.banner-word-2') as string,
      this.$t('landing.banner-word-3') as string,
      this.$t('landing.banner-word-4') as string,
    ];
  }

  get loginURL (): string {
    const state = this.generateRandomString(16);
    const scope = 'user-read-private user-read-email';

    const queryParams = stringify({
      response_type: 'code',
      client_id: process.env.clientID,
      redirect_uri: process.env.redirectURL,
      scope,
      state,
    });

    const authURL = `${process.env.authURL}/authorize?${queryParams}`;
    return authURL;
  }

  generateRandomString (length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
}
</script>

<style lang="scss" scoped>

.landing-page {
  display: flex;

  &__image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-end;
    height: 90%;
    flex: 1;

    @media screen and (max-width: 700px) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      filter: opacity(0.25);
    }

    & > img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  &__information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: rem(15);
    flex: 1;
  }

  &__banner-text {
    margin-bottom: rem(20);
    text-align: center;
    font-size: em(60);
  }

  &__login-button {
    padding: rem(15);
    font-size: em(20);
    font-weight: bold;
    border-radius: rem(40);
    border: 2px solid white;
    box-shadow: 0px 5px 20px -2px rgba(0,0,0,0.5);
    background-color: white;
    color: rgb(68, 216, 167);
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: transparent;
      color: rgb(38, 197, 144);
    }
  }
}

</style>>
