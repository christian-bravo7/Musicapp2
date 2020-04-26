<template>
  <div class="theme-switch">
    <input
      id="theme-switch"
      class="theme-switch__checkbox"
      type="checkbox"
      :checked="hasDarkTheme"
      @change="changeTheme"
    >
    <label
      class="theme-switch__label"
      for="theme-switch"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { settingsStore } from '@/store';

@Component
export default class ThemeSwitch extends Vue {
  get hasDarkTheme (): boolean {
    return settingsStore.theme === 'dark';
  }

  changeTheme (): void {
    const theme = this.hasDarkTheme ? 'light' : 'dark';
    settingsStore.changeTheme(theme);
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  display: flex;
  position: relative;

  &__checkbox {
    display: none;

    &:checked + .theme-switch__label {
      &::before {
        background-color: #9da6d8;
      }

      &::after {
        left: calc(100% - 20px);
        background-color: #3f51b5;
        transform: translateY(-50%);
      }
    }
  }

  &__label {
    display: block;
    position: relative;
    cursor: pointer;
    width: 35px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 15px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 10px;
      background-color: #b9b9b9;
      transition: 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translateY(-50%);
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background-color: #fff;
      transition: 0.3s;
    }
  }
}
</style>
