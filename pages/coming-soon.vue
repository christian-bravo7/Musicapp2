<template>
  <div class="coming-soon">
    {{ $t('landing.coming-soon-label') }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'landing-layout',
})
export default class ComingSoonPage extends Vue {}
</script>

<style lang="scss" scoped>
.coming-soon {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
