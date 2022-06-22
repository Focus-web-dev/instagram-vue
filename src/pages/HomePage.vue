<template>
  <div class="container">
    <section class="home">
      <aside class="home__left">
        <div
            v-if="getFeedData.length"
            class="feed"
        >
          <PostCard
              v-for="postData in getFeedData"
              :key="postData.postId"
              :postData="postData"
          />
        </div>
        <h2 v-else>It's nothing to show. Try to follow someone</h2>
      </aside>
      <aside class="home__right">
        <div class="suggestions">
          <router-link
              :to="`/profile/${getCurrentUserData.nickname}`"
              class="profile-link"
          >
            <div class="profile-link__info">
              <img
                  :src="getCurrentUserData.avatar"
                  alt="user-avatar"
              >
              <p>{{ getCurrentUserData.nickname }}</p>
            </div>
            <button>
              <svg width="24" height="24" aria-hidden="true" role="img">
                <use xlink:href="#arrow-icon"></use>
              </svg>
            </button>
          </router-link>
          <div class="suggestions__users">
            <div
                v-for="user in getUsersData"
                :key="user.id"
                class="user"
            >
              <router-link
                  :to="`/profile/${user.nickname}`"
                  class="user__info"
              >
                <img
                    :src="user.avatar"
                    alt="user-avatar"
                >
                <p>{{ user.nickname }}</p>
              </router-link>

              <button
                  @click="followUser(user.nickname)"
                  :class="{'unfollow' : !checkFollow(user.nickname)}"
                  class="follow"
              >
                <span v-if="checkFollow(user.nickname)">Follow</span>
                <span v-else>Unfollow</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'HomePage',

  components: { PostCard },

  methods: {
    ...mapActions( ['fetchData'] ),
    ...mapMutations( ['followUser'] ),

    checkFollow( user ) {
      return this.getCurrentUserData.follows.findIndex(el => { return el === user }) === -1;
    },
  },

  computed: {
    ...mapGetters( [
        'getFeedData',
        'getCurrentUserData',
        'getUsersData'
    ] ),
  },

  mounted() {
    this.fetchData();
  },

}

</script>