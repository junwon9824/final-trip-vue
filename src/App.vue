<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { useRoute } from "vue-router";
import { ref, computed, watch, onMounted } from "vue";
import { showHeader } from "@/router/index";
const route = useRoute();

// if (route.path === '/login') {
//   console.log('Setting showHeader to false');
//   showHeader.value = false;
// }

const isLoggedIn = computed(() => {
  return sessionStorage.getItem("userId") !== null;
});

// watch(
//   () => isLoggedIn,
//   (newValue, oldValue) => {
//     if (newValue !== oldValue) {
//       // 세션 상태가 변경될 때마다 헤더 표시 여부 업데이트
//       showHeader.value = newValue;
//     }
//   }
// );
</script>

<template>
  <!-- <TheHeader :isLoggedIn="isLoggedIn"></TheHeader> -->
  <TheHeader :showHeader="showHeader"></TheHeader>
  <!-- <router-view :isLoggedIn="isLoggedIn"></router-view> -->
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<style scoped></style>
