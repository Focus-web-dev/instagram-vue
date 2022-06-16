<template>
  <div class="container">
    <section class="home">
      <div class="home__feed">

        <PostCard
            v-for="postData in getFeedData"
            :key="postData.post.id"
            :postData="postData"
        />

      </div>
    </section>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";

import { mapGetters } from 'vuex';

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

  computed: {
    ...mapGetters( [
        'getAllUsers',
        'getFeedData'
    ] ),
  },

}

</script>