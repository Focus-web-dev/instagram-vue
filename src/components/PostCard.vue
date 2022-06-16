<template>
  <div class="post">

    <a href="#" class="post__author">
      <img src="https://sogyaalma.org.sa/wp-content/uploads/sites/276/2021/03/D4431B38-8268-4ACD-87AB-E14106C47E1F-768x800.png" alt="author">
      <p>{{ postData.author }}</p>
    </a>

    <swiper
        class="post__content"
        :class="{'post__content_hidden-pagination': postData.post.postImages.length < 2}"

        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        keyboard
    >
      <swiper-slide
          v-for="image in postData.post.postImages"
          :key="image"
      >
        <img :src="image" alt="post">
      </swiper-slide>

      <div class="bar">
        <button class="bar__item" aria-label="Like post">
          <svg class="like" width="26" height="24" aria-hidden="true" role="img">
            <use xlink:href="#like-icon"></use>
          </svg>
        </button>

        <button class="bar__item" aria-label="Comment post">
          <svg width="24" height="24" aria-hidden="true" role="img">
            <use xlink:href="#comment-icon"></use>
          </svg>
        </button>

        <button class="bar__item" aria-label="Comment post">
          <svg width="24" height="24" aria-hidden="true" role="img">
            <use xlink:href="#save-icon"></use>
          </svg>
        </button>
      </div>
    </swiper>

  </div>
</template>

<script>
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
  name: 'PostCard',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    postData: {
      type: Object,
      required: true
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Keyboard]
    }
  }
}
</script>