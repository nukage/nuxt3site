<template>
<div>
  <h1>Contact</h1>
  <button @click="message()" class="cursor-point inline-block px-16 mt-20 transition-all py-5 border rounded-lg border-gray-500 text-white bg-green-300 hover:bg-red-300 hover:border-red-500 hover:text-bold">Contact Page</button>
  </div>
  </template>

<script>

export default {
  head() {
    return {
      title: 'Contact Page'
    }
  },
  methods:{
    message(){
      console.log('this is a message');
    }
  },
  mounted(){
    console.log('this is the index page')
  }
}

</script>
