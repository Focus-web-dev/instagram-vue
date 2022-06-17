<template>
  <h1 style="margin-top: 100px;">PROFILE of {{ username }}</h1>
</template>

<script>

export default {
  name: 'ProfilePage',
  data() {
    return {
      username: this.$route.params.nickname,
    }
  }
}

</script>