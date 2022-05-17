<template>
<div>
    slug: {{eventStore.slug}}

    <!-- <div class="max-w-screen-md" v-html="event.content.rendered"></div> -->
    <div v-if="eventStore.currentEvent">
    <h3>{{eventStore.currentEvent.title.rendered}}</h3>
    <div v-html="eventStore.currentEvent.content.rendered"></div>
  
    </div>
</div>

          
</template>

<script setup>

import { useEventStore } from "~~/store/events"

const eventStore = useEventStore();
eventStore.getEvents();

const route = useRoute();
// const slug = route.params.slug;
eventStore.setSlug(route.params.slug);

</script>
<script>

// const slug = $route.params.slug
    

export default{

  computed: {
    events(){
    //   return this.$store.state.events;
    },
    event(){
    //   return eventStore.find(el => el.slug === this.slug);
    },
  },
  created(){
    // this.$store.dispatch("getEvents");
  }


}


</script>