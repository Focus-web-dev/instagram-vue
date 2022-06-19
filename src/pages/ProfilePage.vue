<template>

  <div class="container">
    <section class="profile">
      <div class="profile__header">

        <img :src="getUserData.avatar" alt="User avatar">

        <div class="data">
          <div class="data__nickname">
            <h3>{{ getUserData.nickname }}</h3>

            <button
                v-if="this.$route.params.nickname !== 'your-profile'"
                class="follow"
            >
              Follow
            </button>
          </div>

          <div class="info">
            <p class="info__item">
              <span> {{ postsCount.toString() }} </span> posts
            </p>

            <p class="info__item">
              <span>{{ followersCount.toString() }}</span> followers
            </p>

            <p class="info__item">
              <span>{{ followingCount.toString() }}</span> following
            </p>
          </div>

          <div class="data__bio">
            <h4>{{ getUserData.name }}</h4>
            <p>{{ getUserData.description }}</p>
          </div>
        </div>
        
      </div>

      <div class="profile__content">

        <div class="navigation">
          <button class="navigation__item navigation__item_active">
            Posts
          </button>
          <button class="navigation__item">
            Saved posts
          </button>
        </div>

        <div
            v-if="postsCount"
            class="preview-posts"
        >

          <PreviewPostCard
              v-for="postData in getUserData.posts"
              :key="postData.postId"
              :postData="postData"
          />
        </div>

        <h2 v-else>No any posts :)</h2>

      </div>
    </section>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import PreviewPostCard from '../components/PreviewPostCard';

export default {
  name: 'ProfilePage',

  components: {
    PreviewPostCard,
  },

  data() {
    return {
      postsCount: 0,
      followersCount: 0,
      followingCount: 0,
    }
  },

  watch: {
    $route(to) {
      if (to.name === 'ProfilePage') this.fetchUserData( to.params.nickname );
    },
    getUserData() {
      console.log(this.getUserData);
      this.postsCount = this.getUserData.posts.length;
      this.followersCount = this.getUserData.followers.length;
      this.followingCount = this.getUserData.follows.length;
    }
  },

  methods: {
    ...mapActions( ['fetchUserData'] ),
  },

  computed: {
    ...mapGetters( ['getUserData'] ),
  },


  mounted() {
    this.fetchUserData( this.$route.params.nickname );

  },
}


</script>