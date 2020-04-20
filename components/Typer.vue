<template>
  <client-only>
    <vue-typer
      class="typer"
      :text="words"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="typing"
      :pre-type-delay="100"
      :type-delay="100"
      :pre-erase-delay="4000"
      :erase-delay="100"
      erase-style="backspace"
      :erase-on-complete="false"
      caret-animation="smooth"
    />
  </client-only>
</template>
<script lang="ts">

import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Typer extends Vue {
  @Prop({ type: Array }) words!: string[];
}

</script>

<style lang="scss" scoped>
.typer {
  /deep/.custom.char.typed {
    color: #F43469;
  }
  /deep/ .custom.caret {
    width: 5px;
    background-color: #F43469;
  }
}
</style>
