<template>
  <div class="post">

    <div class="post__header">
      <router-link
          :to="'/profile/' + postData.author"
          class="author"
      >
        <img
            :src="postData.avatar"
            alt="author"
        >
        <p>{{ postData.author }}</p>
      </router-link>

      <p class="date">{{ postData.post.postDate }}</p>
    </div>

    <swiper class="swiper"
        :class="{'swiper_hidden-pagination': postData.post.postImages.length < 2}"
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
        <img
            :src="image"
            alt="post"
        >
      </swiper-slide>
    </swiper>

    <div class="bar">
      <button
          @click="postLike( postData.post.postId )"
          class="bar__item"
          aria-label="Like post"
      >
        <svg
            :class="{ 'like_active' : likeCheck(postData.post) }"
            class="like"
            width="26"
            height="24"
            aria-hidden="true"
            role="img"
        >
          <use xlink:href="#like-icon"></use>
        </svg>
      </button>

      <router-link
          :to="`/post/${postData.author}/${postData.post.postId}`"
          class="bar__item"
          aria-label="Comment post"
      >
        <svg width="24" height="24" aria-hidden="true" role="img">
          <use xlink:href="#comment-icon"></use>
        </svg>
      </router-link>

      <button
          @click="postSave(postData.post.postId)"
          class="bar__item"
          aria-label="Comment post"
      >
        <svg
            :class="{ 'save_active' : saveCheck(postData.post.postId) }"
            width="24"
            height="24"
            aria-hidden="true"
            role="img"
        >
          <use xlink:href="#save-icon"></use>
        </svg>
      </button>
    </div>

    <div class="post__footer">
      <p class="likes">{{ postData.post.postLikes.length.toString() }} likes</p>

      <p class="description">
        <router-link :to="'/profile/' + postData.author">{{ postData.author }}</router-link>
        {{ postData.post.postDescription }}
      </p>

      <router-link
          class="view"
          :to="`/post/${postData.author}/${postData.post.postId}`"
      >
        View {{ postData.post.postComments.length.toString() }} comment(s)
      </router-link>

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

            <button
                @click="commentLike(comment.commentId)"
                class="likes"
            >
              <svg
                  class="like"
                  :class="{ 'like_active' : commentLikeCheck(comment.commentId) }"
                  width="14"
                  height="12"
                  aria-hidden="true"
                  role="img"
              >
                <use xlink:href="#like-icon"></use>
              </svg>
              <span>{{ comment.commentLikes.length.toString() }} likes</span>
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

import {mapGetters, mapMutations} from "vuex";

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

  methods: {
    ...mapMutations( [
        'postLike',
        'postSave',
        'commentLike'
    ] ),

    likeCheck(post) {
      return post.postLikes.findIndex(el => { return el === this.getCurrentUserData.nickname; }) !== -1;
    },

    saveCheck(postId) {
      return this.getCurrentUserData.savedPosts.findIndex(el => { return el === postId }) !== -1;
    },

    commentLikeCheck(commentId) {
      let bool = true;

      this.getAllPosts.forEach(post => {
        post.post.postComments.forEach(comment => {
          let currentUserIdx = comment.commentLikes.findIndex(idx => {return idx === this.getCurrentUserData.nickname});
          if ((comment.commentId === commentId) && (currentUserIdx === -1)) bool = false;
        })
      })

      return bool;
    }
  },

  computed: {
    ...mapGetters( ['getCurrentUserData', 'getAllPosts'] ),
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Keyboard]
    }
  }
}
</script>