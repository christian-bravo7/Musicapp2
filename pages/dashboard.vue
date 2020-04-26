<template>
  <div class="dashboard">
    <div class="dashboard__slider">
      <h3 class="slider__title">
        Ultimos lanzamientos
      </h3>
      <TrackSlider
        v-slot="{ slide }"
        :slide-list="newAlbums"
        class="slider__list-container"
      >
        <TrackCard
          class="slider__single-track"
          :image-url="slide.images[0].url"
          :artist-name="slide.artists[0].name"
          :name="slide.name"
        />
      </TrackSlider>
    </div>
    <div class="dashboard__slider">
      <h3 class="slider__title">
        Categorias
      </h3>
      <TrackSlider
        v-slot="{ slide }"
        :slide-list="categories"
        class="slider__list-container"
      >
        <TrackCard
          class="slider__single-track"
          :image-url="slide.icons[0].url"
          :name="slide.name"
        />
      </TrackSlider>
    </div>
    <div class="dashboard__slider">
      <h3 class="slider__title">
        Playlists
      </h3>
      <TrackSlider
        v-slot="{ slide }"
        :slide-list="playlists"
        class="slider__list-container"
      >
        <TrackCard
          class="slider__single-track"
          :image-url="slide.images[0].url"
          :artist-name="slide.description"
          :name="slide.name"
        />
      </TrackSlider>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Component, Vue } from 'nuxt-property-decorator';
import { userStore, albumsStore, categoriesStore, playlistsStore } from '@/store';
import TrackSlider from '@/components/layout/TrackSlider.vue';
import TrackCard from '@/components/layout/TrackCard.vue';

@Component({
  head () {
    return {
      titleTemplate: '%s | Dashboard',
    };
  },
  layout: 'authenticated',
  async middleware () {
    await userStore.retrieveUserProfile();
    await albumsStore.retrieveNewLocaleAlbums();
    await categoriesStore.retrieveCategories();
    await playlistsStore.retrieveFeaturedPlaylists();
  },
  computed: {
    ...mapGetters({
      newAlbums: 'albums/albums',
      categories: 'categories/categories',
      playlists: 'playlists/playlists',
    }),
  },
  components: {
    TrackSlider,
    TrackCard,
  },
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss" scoped>

.dashboard {
  &__slider {
    user-select: none;
    margin: rem(20) 0;
  }
}

.slider {
  &__title {
    color: var(--text);
    margin-bottom: rem(16);
  }

  &__list-container {
    &:hover .slider__single-track {
      opacity: 0.6;
    }
    &:hover .slider__single-track:hover {
      opacity: 1;
    }
  }
}

</style>
