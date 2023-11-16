<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const showHeader = ref(true);
const route = useRoute();

// if (route.path === '/login') {
//   console.log('Setting showHeader to false');
//   showHeader.value = false;
// }
</script>

<template>
  <TheHeader></TheHeader>

  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<style scoped></style>
