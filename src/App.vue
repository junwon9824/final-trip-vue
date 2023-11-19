<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { useRoute } from 'vue-router';
import { ref ,computed} from 'vue';
const showHeader = ref(true);
const route = useRoute();

// if (route.path === '/login') {
//   console.log('Setting showHeader to false');
//   showHeader.value = false;
// }
const isLoggedIn = computed(() => {
      return sessionStorage.getItem('userId') !== null;
    });

</script>

<template>
  <TheHeader :isLoggedIn="isLoggedIn"></TheHeader>

  <router-view :isLoggedIn="isLoggedIn"></router-view>
  <TheFooter></TheFooter>
</template>

<style scoped></style>
