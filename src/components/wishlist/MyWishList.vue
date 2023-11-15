<script setup>
import { defineProps } from 'vue';

defineProps({ wishlist: Object });
</script>
<template>
  <div class="card mx-2 rounded-5 shadow" style="width: 200px">
    <img
      class="card-img-top p-2 rounded-5"
      style="height: 150px"
      src="@/assets/mountain_car.png"
      alt="Card image"
    />
    <div class="card-body m-0 p-2">
      <p class="fs-5 fw-bold">{{ wishlist.mntiname }}</p>
      <p class="fs-6"><i class="bi bi-geo-alt-fill me-2 text-danger"></i>{{ wishlist.mntiadd }}</p>
    </div>
  </div>
</template>

<style scoped></style>
