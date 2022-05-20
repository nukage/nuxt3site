<template>
<div>
    slug: {{eventStore.slug}}
    <div v-if="eventStore.currentEvent">
        <!-- <div class="max-w-screen-md" v-html="event.content.rendered"></div> -->
        <div v-if="eventStore.currentEvent.loading">
            <h3>Please wait while the event data loads.</h3>
        </div>
        <div v-else-if="eventStore.currentEvent.title?.rendered">
            <h3>{{eventStore.currentEvent.title.rendered}}</h3>
            <div v-html="eventStore.currentEvent.content.rendered"></div>
        </div>
        <div v-else><h3>Error</h3> <p>No page found at this location.</p> </div>
    </div>
</div>
</template>
<script setup>
import { useEventStore } from "~~/store/events"
    const eventStore = useEventStore();
    eventStore.getEvents();
    const route = useRoute();
    eventStore.setSlug(route.params.slug);
</script>
<script>
export default{
    setup() {
    },
    computed: {
        currentEvent() {
            return eventStore.currentEvent();
        }  
    },
    watch: {
        currentEvent(newEvent, oldEvent){
            console.log(newEvent)
        }
    }
}
</script>