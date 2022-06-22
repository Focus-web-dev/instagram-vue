<template>
  <div class="container">
    <section class="profile">
      <div class="profile__header">
        <img
            :src="getUserData.avatar"
            alt="User avatar"
        >
        <div class="data">
          <div class="data__nickname">
            <h3>{{ getUserData.nickname }}</h3>
            <button
                @click="followHandler()"
                v-if="this.$route.params.nickname !== getCurrentUser.nickname"
                class="follow"
                :class="{ 'unfollow': !checkFollow() }"
            >
              <span v-if="checkFollow()">Follow</span>
              <span v-else>Unfollow</span>
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
          <button
              @click="switchTab('Posts')"
              :class="{ 'navigation__item_active' : currentTab === 'Posts' }"
              class="navigation__item"
          >
            Posts
          </button>
          <button
              v-if="this.$route.params.nickname === getCurrentUser.nickname"
              @click="switchTab('Saved posts')"
              class="navigation__item"
              :class="{ 'navigation__item_active' : currentTab === 'Saved posts' }"
          >
            Saved posts
          </button>
        </div>

        <div
            v-if="(postsCount) && (currentTab === 'Posts')"
            class="preview-posts"
        >
          <PreviewPostCard
              v-for="postData in getUserData.posts"
              :key="postData.postId"
              :postData="postData"
              :postAuthor="getUserData.nickname"
          />
        </div>

        <div
            v-else-if="currentTab === 'Saved posts'"
            class="preview-posts"
        >
          <PreviewPostCard
              v-for="postData in getSavedPosts"
              :key="postData.postId"
              :postData="postData"
              :postAuthor="postData.postAuthor"
          />
        </div>

        <h2 v-else>No any posts :)</h2>

      </div>
    </section>
  </div>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from 'vuex';
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

      followers: [],

      currentTab: 'Posts',
    }
  },

  watch: {
    $route(to) {
      if (to.name === 'ProfilePage') this.fetchUserData( to.params.nickname );
    },

    getUserData: function() { this.updateData(); }
  },

  methods: {
    ...mapActions( ['fetchUserData'] ),
    ...mapMutations( ['updateUserData', 'profileFollow'] ),

    switchTab( tab ) {
      this.currentTab = tab;
    },

    updateData() {
      this.postsCount = this.getUserData.posts.length;
      this.followersCount = this.getUserData.followers.length;
      this.followingCount = this.getUserData.follows.length;

      this.followers = this.getUserData.followers;
    },

    followHandler() {
      this.profileFollow( this.getCurrentUser.nickname );
      this.updateData();
    },

    checkFollow() {
      return this.followers.findIndex(el => {
        return el === this.getCurrentUser.nickname
      }) === -1;
    }
  },

  computed: {
    ...mapGetters( ['getUserData', 'getCurrentUser', 'getSavedPosts'] ),
  },


  mounted() {
    this.fetchUserData( this.$route.params.nickname );
  },
}


</script>