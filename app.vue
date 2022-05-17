<template>
  <div>
    <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
    <NuxtLayout>
      
      </NuxtLayout>
 
  </div>
</template>

<script setup lang="ts">
// import { useTodoStore } from "~/store/index";

// const todoStore = useTodoStore();


const route = useRoute()
// const {data, error} = useFetch("http://jamstack.local/wp-json/wp/v2/posts")
</script>