<script setup>
import { defineProps } from 'vue';

defineProps({ board: Object });
</script>
<template>
  <tr>
    <td class="pt-3 pb-3 d-flex flex-row">
      <div>
        <img
          src="@/assets/mountain_car.png"
          class="img-fluid rounded mx-4 d-block"
          alt="..."
          style="width: 350px; height: 190px; object-fit: fill"
        />
      </div>

      <div class="card-body d-flex flex-column">
        <p class="card-title fw-bold fs-3">{{ board.subject }}</p>
        <p class="card-text pb-3 fs-5">{{ board.content }}</p>
        <p class="mt-5">{{ board.registerTime }}</p>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
