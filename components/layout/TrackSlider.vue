<template>
  <swiper :options="swiperOptions" class="swipper-container">
    <swiper-slide
      v-for="(slide, key) in slideList"
      :key="key"
      class="track-slide"
    >
      <slot :slide="slide" />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import TrackCard from '@/components/layout/TrackCard.vue';

import { Dictionary } from '@/utils/models';

@Component({
  components: {
    SwiperSlide,
    Swiper,
    TrackCard,
  },
})
export default class TrackSlider extends Vue {
  @Prop({ type: Object }) sliderOptions!: Dictionary;
  @Prop({ type: Array }) slideList!: Array<Dictionary>;

  get swiperOptions () {
    return {
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      loopedSlides: this.slideList.length,
      ...this.sliderOptions,
    };
  }
}

</script>

<style lang="scss" scoped>

.track-slide {
  width: 200px;
}

</style>
