<template>
<div>
  <Header />
  <div class="container mx-auto">
  <NuxtPage/>
  </div>
</div>
</template>



<script>

  import Header from '~/components/Header.vue'


export default {
  components: {
    Header
  }
}
    </script>
