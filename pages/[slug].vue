<template>
  <div class="container">
{{$route.slug}}
  </div>
</template>

<script lang="ts">
export default ({
//   async asyncData({ store, params }) {
//     await store.dispatch('posts/getPost', params.slug)
//   },
  computed: {
    post() {
    //   return this.$store.state.posts.post
    },
  },
})
</script>