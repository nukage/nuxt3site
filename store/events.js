// import { createStore } from 'vuex'
import { defineStore } from 'pinia'

 

export const useEventStore = defineStore('eventStore', {
    state: () => ({
        events: [],
        slug: ''
    }),
    getters:{
        // sortedEvents: (state) => {
        //     return state.events.slice().sort((a, b) => new Date(a.acf.start_time) - new Date(b.acf.start_time));
        //   },
        currentEvent: (state) => {
          let event = state.events.find((r) => r.slug === state.slug);
          if (state.events[0] && !event) {
            event = {notFound: true}
          } else if (!state.events[0]){
            event = {loading: true}
          }
            return event;
        }
      },
  actions: {
      updateEvents(events){
        this.events = events;
      
      },
      setSlug(slug){
        this.slug = slug;
      },
    async getEvents() {
        // if events is already set, stop
        if (this.events.length) return;
        try {
            // let events = await fetch(`http://jamstack.local/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`).then(res => res.json());
            let events = await fetch(`https://stevewaitt.nukage.net/wp-json/wp/v2/posts?page=1&per_page=100&_embed=1`).then(res => res.json());
            // filter out unnecessary data
            events = events.filter(el => el.status === "publish").map(({ id, slug, title, content, acf }) => ({
                id,
                slug,
                title,
                content,
                // acf,
            }));
    // commit('SET_EVENTS', events);
    
    this.events = events;
    return this.events;
 
} catch (err) {
    console.error('getEvents', err);
}
},
},
});

  