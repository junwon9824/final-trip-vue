<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  RecommendCard: Object,
});

const addToWishlist = () => {
  console.log('위시리스트에 추가되었습니다.', props.RecommendCard.mntiname);
};
</script>

<template>
  <div class="card mb-3" style="max-width: 350px; height: 170">
    <div class="d-flex flex-row g-0">
      <div class="col-5 m-2">
        <img src="@/assets/mountain_car.png" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-7 my-2 d-flex flex-column justify-content-between align-items-start">
        <button type="button" class="btn btn-dark rounded-pill btn-sm m-0 py-1">
          {{ RecommendCard.mntiadd }}
        </button>
        <p class="fs-5">{{ RecommendCard.mntiname }}</p>
        <p class="fs-6">{{ RecommendCard.mntidetails }}</p>
        <button type="button" class="btn btn-sm m-0 p-0">Basic</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
