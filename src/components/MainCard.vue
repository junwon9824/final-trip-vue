<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  MainCard: Object,
});

const showMountain = () => { 
  alert("안녕")
}

</script>

<template>
  <div class="card shadow-lg p-4 m-4" style="width: 600px">
    <img class="card-img-top" src="../../assets/mountain_car.png" alt="Card image" />
    <div class="card-img-overlay d-flex justify-content-between align-items-center flex-column">
      <h4 class="card-title strong">{{ MainCard.mntiname }}</h4>
      <button @click="showMountain">둘러보기</button>
      <!-- <a href="#" class="btn btn-white rounded-pill">둘러보기</a> -->
    </div>
  </div>
</template>
<style scoped></style>
