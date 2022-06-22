<template>
  <div class="preview-post">
    <router-link
        :to="`/post/${postAuthor}/${postData.postId}`"
    >
      <img
          :src="postData.postImages[0]"
          alt="Post image"
      >
      <div class="post-info">
        <div class="post-info__item">
          <svg class="like" width="26" height="24" aria-hidden="true" role="img">
            <use xlink:href="#like-icon"></use>
          </svg>
          <span>{{ postData.postLikes.length.toString() }}</span>
        </div>

        <div class="post-info__item">
          <svg width="24" height="24" aria-hidden="true" role="img">
            <use xlink:href="#comment-icon"></use>
          </svg>
          <span>{{ postData.postComments.length.toString() }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    postData: {
      type: Object,
      required: true
    },
    postAuthor: {
      type: String,
      required: true
    }
  },
}
</script>