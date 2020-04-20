<template>
  <nav class="navigation-bar">
    <div class="navigation-bar__search-input-wrapper">
      <i class="material-icons navigation-bar__search-icon">
        search
      </i>
      <input class="navigation-bar__search-input" type="text">
    </div>
    <AppLogo
      class="navigation-bar__logo"
      wordmark
      :country="country"
    />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppLogo from '@/components/AppLogo.vue';
import { userStore } from '@/store';

@Component({
  components: {
    AppLogo,
  },
})
export default class NavigationBar extends Vue {
  get country () {
    return userStore.profile.country;
  }
}

</script>

<style lang="scss" scoped>
.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: rem(16);

  &__search-input-wrapper {
    position: relative;
    max-width: rem(500);
    width: 100%;
    margin-right: rem(12);
  }

  &__search-input {
    width: 100%;
    border-radius: rem(40);
    border: none;
    background-color: #f1f1f1;
    padding: rem(8) rem(16);
    outline: none;
    font-size: em(16);
    color: #646464;
  }

  &__search-icon {
    position: absolute;
    top: 50%;
    right: rem(10);
    transform: translateY(-50%);
    color: #646464;
  }

  &__logo {
    /deep/ .logo__thumbnail {
      width: rem(25);
      height: rem(25);
    }
  }
}

</style>
