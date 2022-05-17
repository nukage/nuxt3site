

let event = ref({
    title: {
        rendered: 'test'
    }})
event = eventStore.sortedEvents.find((r) => r.slug === slug);


const getEventFromSlug = (events) => { 
console.log('get event from slug loaded')
event.title.rendered = 'Ok, this loaded.';
}

if (eventStore.sortedEvents.length > 0 ){
    console.log('sorted events seems to have been loaded...')
    // console.log(eventStore);
    //  event = getEventFromSlug(eventStore);
    const event = eventStore.sortedEvents.find((r) => r.slug === slug);
    console.log(eventStore.sortedEvents)
    console.log(eventStore.events.find((r) => r.slug === slug))
    
 //nothing
} else {
        console.log('events seems to have NOT been loaded...');
        event = {title: { rendered: 'Loading title...'}}
    eventStore.getEvents()
    .then(events => {
         getEventFromSlug(events);
        
        } )
}
