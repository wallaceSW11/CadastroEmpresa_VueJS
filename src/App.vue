<template>
    <div id="app">
      <NavBar  v-if="this.$router.currentRoute.name != 'Login'" />
      <router-view />
    </div>
</template>

<script>

import NavBar from '@/components/menu/navbar/NavBar.vue';

export default {
  components:{
    NavBar
  }

}
</script>
