<template>
  <section class="profile">
    <figure class="profile__thumbnail">
      <img
        class="profile__image"
        :src="avatar"
        alt=""
      >
    </figure>
    <h3 class="profile__username">
      {{ username }}
    </h3>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SidebarProfile extends Vue {
  @Prop({ type: String }) avatar!: string;
  @Prop({ type: String }) username!: string;
}

</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  align-items: center;
  padding: rem(16);

  &__thumbnail {
    width: rem(60);
    height: rem(60);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: rem(16);
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__username {
    font-size: em(16);
  }
}
</style>
