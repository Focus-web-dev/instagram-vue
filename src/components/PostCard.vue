<template>
  <div class="post">

    <div class="post__header">
      <router-link :to="'/profile/' + postData.author" class="author">
        <img :src="postData.avatar" alt="author">
        <p>{{ postData.author }}</p>
      </router-link>

      <p class="date">{{ postData.post.postDate }}</p>
    </div>

    <swiper class="post__content"
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
    </swiper>

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

    <div class="post__footer">
      <p class="likes">{{ postData.post.postLikes.toString() }} likes</p>

      <p class="description">
        <router-link :to="'/profile/' + postData.author">{{ postData.author }}</router-link>
        {{ postData.post.postDescription }}
      </p>

      <a class="view" href="#">View {{ postData.post.postComments.length.toString() }} comment(s)</a>

      <div class="comments">
        <div
            v-for="(comment, index) in postData.post.postComments"
            :key="comment.commentId"
            class="comments__item"
        >
          <div v-if="index < 3">
            <router-link :to="'/profile/' + comment.commentAuthor">
              <span>{{ comment.commentAuthor }}:</span> {{ comment.commentText }}
            </router-link>
            <button class="likes">
              <svg class="like" width="14" height="12" aria-hidden="true" role="img">
                <use xlink:href="#like-icon"></use>
              </svg>
              <span>{{ comment.commentLikes.toString() }} likes</span>
            </button>
          </div>
        </div>
      </div>
    </div>

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