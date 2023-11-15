<script setup>
import { defineProps } from 'vue';

defineProps({
  MainCard: Object,
});




</script>

<template>

  <div class="card shadow-lg m-4" style="width: 600px">

    <img class="card-img-top" src="../../assets/mountain_car.png" alt="Card image" />
    <div class="card-img-overlay d-flex justify-content-between align-items-center flex-column">
      <p class="card-title text-light fs-2 fw-bold">{{ MainCard.mntiname }}</p>

      <RouterLink to="/">

        <a href="#" class="btn btn-light btn-lg rounded-pill px-4 py-2">둘러보기<i class="bi bi-arrow-right"></i></a>
      </RouterLink>

    </div>

  </div>

</template>
<style scoped></style>
