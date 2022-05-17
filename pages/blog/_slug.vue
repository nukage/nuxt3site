<template>
  <div>
    <div class="container">
      <h2 class="mb-8" v-if="post.title.rendered">{{ post.title.rendered }}</h2>
      <template v-if="post.content.rendered">
      <div v-html="post.content.rendered"></div>
      Have a dope day
      </template>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
      return {
        post: {}
      }
    } ,
    async asyncData({params, payload}){
      if(payload) {
          return {
            post: payload
          }
        } else {
          return axios.get('http://jamstack.local/wp-json/wp/v2/posts/' + params.id)
            .then((res) => {
              return {
                post: res.data
              }
            })
        }
      }
}

</script>
