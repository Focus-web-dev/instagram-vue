<template>
  <div class="container">
    <section class="home">
      <div class="feed">
        <PostCard
            v-for="postData in getFeedData"
            :key="postData.postId"
            :postData="postData"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomePage',
  data() {
    return {
      images: ["https://picsum.photos/id/237/200/300", "https://picsum.photos/id/239/200/300", "https://picsum.photos/id/238/200/300"]
    }
  },

  components: {
    PostCard,
  },

  methods: {
    ...mapActions( ['fetchProjects'] ),
  },

  computed: {
    ...mapGetters( [
        'getAllUsers',
        'getFeedData'
    ] ),
  },

  mounted() {
    this.fetchProjects();
  },

}

</script>