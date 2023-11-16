<template>
    <tr>
      <td>
        <div class="d-flex justify-content-around align-items-center py-3">
          <p class="col-2 text-center">{{ searchResult.mntiname }}</p>
          <p class="col-10">{{ searchResult.mntidetails }}</p>
        </div>
      </td>
    </tr>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  const props = defineProps(['searchResult']);
  if (props.searchResult) {
    console.log(props.searchResult);
    console.log(props.searchResult.mntidetails);
  }
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  