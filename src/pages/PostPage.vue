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
        <router-link
            :to="`/profile/${this.$route.params.nickname}`"
            class="profile-link"
        >
          <div class="profile-link__info">
            <img :src="postData.authorAvatar" alt="user-avatar">
            <p>{{ postData.author }}</p>
          </div>
          <svg width="24" height="24" aria-hidden="true" role="img">
            <use xlink:href="#arrow-icon"></use>
          </svg>
        </router-link>

        <div class="comments">
          <div
              class="comment"
              v-if="postData.post.postDescription !== ''"
              style="margin-bottom: 10px;"
          >
            <router-link
                :to="`/profile/${this.$route.params.nickname}`"
                class="author"
            >
              <img
                  :src="getUserAvatar( this.$route.params.nickname )"
                  alt="user avatar"
              >
              <span>
                {{ this.$route.params.nickname }}
              </span>
            </router-link>

            <p>{{ postData.post.postDescription }}</p>
          </div>
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
            <button
                @click="commentLike(comment.commentId)"
                class="likes"
            >
              <svg
                  class="like"
                  :class="{'like_active' : commentLikeCheck(comment.commentId)}"
                  width="14"
                  height="12"
                  aria-hidden="true"
                  role="img"
              >
                <use xlink:href="#like-icon"></use>
              </svg>
              <span>{{ comment.commentLikes.length }} likes</span>
            </button>
          </div>
        </div>

        <div class="comments-footer">
          <div class="bar">
            <button
                @click="postLike(postData.post.postId)"
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

              <span>{{ postData.post.postLikes.length }} likes</span>
            </button>

            <router-link
                :to="this.$route.fullPath"
                class="bar__item"
                aria-label="Comment post"
            >
              <svg width="24" height="24" aria-hidden="true" role="img">
                <use xlink:href="#comment-icon"></use>
              </svg>
              <span>{{ postData.post.postComments.length }} comments</span>
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

          <div class="form">
            <input
                v-model="commentInput"
                type="text"
                placeholder="Enter your comment..."
            >
            <button
                @click="addNewCommentHandler(postData.post.postId)"
            >
              Post
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
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "PostPage",

  data() {
    return {
      postData: {},
      commentInput: ""
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
    ...mapMutations( ['postLike', 'postSave', 'commentLike', 'addNewComment'] ),

    likeCheck( postData ) {
      return postData.postLikes.findIndex(el => { return el === this.getCurrentUserData.nickname; }) !== -1;
    },

    saveCheck( postId ) {
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
    },

    addNewCommentHandler(postId) {
      if (this.commentInput.length) {
        this.addNewComment( {
          postId: postId,
          commentText: this.commentInput,
        } );
        this.commentInput = "";
      }
    },

    getUserAvatar(nickname) {
      let avatar = "";

      if (nickname === this.getCurrentUserData.nickname) avatar = this.getCurrentUserData.avatar;
      else this.getUsersData.forEach(el => { if (el.nickname === nickname) avatar = el.avatar; })

      return avatar;
    }
  },

  computed: {
    ...mapGetters( ['getUsersData', 'getAllPosts', 'getCurrentUserData'] )
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