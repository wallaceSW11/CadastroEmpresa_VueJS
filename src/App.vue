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

<style>

/* :root {
  --primary-color: #002984;
  --secondary-color: #3f51b5;
  --primary-font-color: white;
  --backgroud-color-container: #f5f5f5;
} */

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  max-width: 80%;
  background-color: var(--backgroud-color-container);
  display: flex;
  flex-direction: column;
}

.icones-tabela {
  color: var(--primary-color);
  cursor: pointer;
  margin: 5px;
}

</style>
