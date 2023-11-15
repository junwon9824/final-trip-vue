
<template>
    <div>
       <ul>
        <li v-for="result in searchResult" :key="result.id">
          <!-- Customize the display of each search result -->

          {{ result.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['searchResult']);
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  
