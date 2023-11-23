<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <!-- <TheHeader :isLoggedIn="isLogin"></TheHeader> -->
  <TheHeader></TheHeader>
  <!-- <router-view :isLoggedIn="isLogin"></router-view> -->
  <router-view></router-view>
  <TheFooter></TheFooter>
</template>

<style scoped></style>
