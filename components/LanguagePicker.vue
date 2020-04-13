<template>
  <div class="language-picker">
    <div class="language-picker__flex-wrapper">
      <i class="material-icons language-picker__language-icon">
        translate
      </i>
      <select
        id="languagePicker"
        v-model="currentLanguage"
        class="language-picker__select"
        :class="{ 'language-picker__select--is-uppercase': abbreviation }"
        name="language-picker"
        @change="changeLanguage"
      >
        <option
          v-for="(language, index) in availableLanguages"
          :key="index"
          class="language-picker__option"
          :class="{ 'language-picker__option--is-uppercase': abbreviation }"
          :value="language.code"
        >
          <template v-if="abbreviation">
            {{ language.code }}
          </template>
          <template v-else>
            {{ language.name }}
          </template>
        </option>
      </select>
      <i class="material-icons language-picker__arrow-icon">
        expand_more
      </i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class LanguagePicker extends Vue {
  @Prop({ type: Boolean, default: false }) readonly abbreviation!: boolean;
  language: string = '';

  get currentLanguage (): string {
    return this.language || this.$i18n.locale;
  }

  set currentLanguage (language: string) {
    this.language = language;
  }

  get availableLanguages () {
    return [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ];
  }

  changeLanguage (): void {
    this.$router.push(this.switchLocalePath(this.currentLanguage));
    this.languageChanged();
  }

  @Emit('language-changed')
  languageChanged () {}
}
</script>

<style lang="scss" scoped>
.language-picker {
  display: inline-block;
  border-radius: rem(40);
  padding: 0 rem(8);
  border: 1px solid var(--secondary);

  &__flex-wrapper {
    display: flex;
    align-items: center;
  }

  &__select, &__option {
    border-radius: rem(40);
    font-size: em(16);

    &--is-uppercase {
      text-transform: uppercase;
    }
  }

  &__select {
    appearance: none;
    background-color: transparent;
    border: none;
    height: rem(30);
    padding: 0 rem(32);
    cursor: pointer;
  }

  &__language-icon, &__arrow-icon {
    color: var(--secondary);
    font-size: em(16);
  }

  &__language-icon {
    margin-right: rem(-24);
  }

  &__arrow-icon {
    margin-left: rem(-24);
    pointer-events: none;
  }
}
</style>
