<template>
  <div class="container">
    <div class="full-post" v-if="postData.post">
      <div class="full-post__content">
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
            <img :src="image" alt="post">
          </swiper-slide>
        </swiper>
      </div>

      <div class="full-post__data">
        <router-link :to="`/profile/${this.$route.params.nickname}`" class="profile-link">
          <div class="profile-link__info">
            <img :src="postData.authorAvatar" alt="user-avatar">
            <p>{{ postData.author }}</p>
          </div>
          <button>
            <svg width="24" height="24" aria-hidden="true" role="img">
              <use xlink:href="#arrow-icon"></use>
            </svg>
          </button>
        </router-link>

        <div class="comments">
          <div
              v-for="comment in postData.post.postComments"
              :key="comment.commentId"
              class="comment"
          >

            <router-link :to="`/profile/${comment.commentAuthor}`" class="author">
              <img :src="getUserAvatar( comment.commentAuthor )" alt="user avatar">
              <span>{{ comment.commentAuthor }}</span>
            </router-link>

            <p>{{ comment.commentText }}</p>
            <button class="likes">
              <svg class="like" width="14" height="12" aria-hidden="true" role="img">
                <use xlink:href="#like-icon"></use>
              </svg>
              <span>{{ comment.commentLikes.length }} likes</span>
            </button>
          </div>
        </div>

        <div class="comments-form">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostPage",

  data() {
    return {
      postData: {}
    }
  },

  watch: {
    getAllPosts: function() {
      this.postData = this.getAllPosts[this.getAllPosts.findIndex(el => {return el.post.postId === Number(this.$route.params.id)})]
      console.log(this.postData);
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    ...mapActions( ['fetchData'] ),

    getUserAvatar( nickname ) {
      let avatar = "";

      this.getAllUsers.forEach(el => {
        if (el.nickname === nickname) {
          avatar = el.avatar;
        }
      })

      return avatar;
    }
  },

  computed: {
    ...mapGetters( ['getAllPosts', 'getCurrentUserData', 'getAllUsers'] )
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Keyboard]
    }
  },

  mounted() {
    this.fetchData();
  },

}
</script>