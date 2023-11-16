<template>
  <div>
    <tr>
      <td>
 
        <div>
          <!-- Customize the display of each search result -->
          {{ searchResult.mntiname }}
          <br />
          <br />
          {{ searchResult.mntidetails }}
        </div>
      </td>
    </tr>
  </div>
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
 