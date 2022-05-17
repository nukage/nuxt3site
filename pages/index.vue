<template>
  <div>
    <div class="container mx-auto">
        <h3>This is the homepage</h3>

        <div class="posts">
          <h3>Latest from our blog</h3>
          <div v-for="item in todoStore.items">
          {{ item }}
          </div>
          <div v-for="event in eventStore.sortedEvents" :key="event.id">
          
          <h3>{{event.title.rendered}}</h3>
          <div class="max-w-screen-md" v-html="event.content.rendered"></div>
          </div>
     
  
          <!-- <div class="post" v-for="post in posts" :key="post.id">
            <h4 class="font-800 text-24">
              {{ post.title.rendered }}
            </h4>
            <div  class="post-content mb-20" v-html="post.excerpt.rendered">

            </div>
              <nuxt-link :to=" { name: 'blog-slug', params: { slug: post.slug, id: post.id } }">
                  Read More
              </nuxt-link>
          </div> -->

          <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">

  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
    <hr>
  </div>
</figure>
        </div>
    </div>
  </div>
</template>

<script setup>

import { useTodoStore } from "~/store/index";
import { useEventStore } from "~/store/events"

const todoStore = useTodoStore();
const eventStore = useEventStore();
  eventStore.getEvents();

 
onMounted(()=>{
})  
</script>

<!-- <script>
export default {
name: 'IndexPage',
// computed: {
//   events() {
//     return this.$store.state.events;
//   }
//  },

};
</script> -->