

<template>
    <tr @click="goToMountainView(searchResult.mntilistno)">
      <td>
        <div class="d-flex justify-content-around align-items-center py-3">
          <p class="col-2 text-center">{{ searchResult.mntiname }}</p>
          <p class="col-10">{{ searchResult.mntidetails }}</p>
        </div>
      </td>
    </tr>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref, defineProps } from 'vue';

  const router = useRouter();
  const props = defineProps(['searchResult']);
  if (props.searchResult) {
    console.log(props.searchResult);
    console.log(props.searchResult.mntidetails);
  }


  function goToMountainView(mntilistno) {
      // console.log ("hi");
      router.push({ name: 'MountainDetail', params: { id: mntilistno } });
    }
  </script>
  
  <style scoped>
  /* Add your component styles here */
  </style>
  