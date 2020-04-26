<template>
  <div class="track-card">
    <div class="track-card__thumbnail">
      <img
        :src="imageUrl"
        class="track-card__image"
        alt=""
      >
      <div class="track-card__information">
        <p class="track-card__artist">
          {{ artistName }}
        </p>
      </div>
    </div>
    <p class="track-card__name">
      {{ name }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TrackCard extends Vue {
  @Prop({ type: String }) imageUrl!: string;
  @Prop({ type: String }) artistName!: string;
  @Prop({ type: String }) name!: string;
}

</script>

<style lang="scss" scoped>

.track-card {
  cursor: pointer;
  transition: 0.2s;

  &:hover &__information {
    opacity: 1;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9));
  }

  &__thumbnail {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: rem(20);
    overflow: hidden;
  }

  &__name {
    margin-top: rem(6);
    text-align: center;
    color: var(--text);
    white-space: initial;
  }

  &__artist {
    text-align: right;
  }

  &__image {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  &__information {
    display: flex;
    opacity: 0;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 16px;
    justify-content: flex-end;
    color: white;
    transition: 0.4s;
  }
}

</style>
