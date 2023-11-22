<script setup>
// const props = defineProps(["ranker"]);
import { defineProps, onMounted, ref, computed } from "vue";

const props = defineProps({
  ranker: Object,
});

// console.log("ranker " + props.ranker[0].userName);

// const has3ranker = ref(false);

const has3ranker = computed(() => {
  return props.ranker.length === 3;
});

onMounted(() => {
  console.log("onmnted");
  has3ranker;
});
</script>

<template>
  <div
    v-if="has3ranker"
    class="card mt-5 bg-info py-4 rounded-pill d-flex flex-row justify-content-around"
  >
    <div class="d-flex flex-row align-items-center">
      <img
        src="../../assets/prfile_temp_1.png"
        alt="..."
        class="rounded-circle"
      />

      <div class="ms-3">
        <p class="fs-6 mb-0 pb-0">
          <i class="bi bi-trophy-fill" style="color: gold"></i> 이 산의 지배자
        </p>
        <p class="fs-4 fw-bold">{{ ranker[0].userName }}</p>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <img
        src="../../assets/prfile_temp_2.png"
        alt="..."
        class="rounded-circle"
      />

      <div class="ms-3">
        <p class="fs-6 mb-0 pb-0">
          <i class="bi bi-trophy-fill" style="color: silver"></i> 차기 재배자?
        </p>
        <p class="fs-4 fw-bold">{{ ranker[1].userName }}</p>
      </div>
    </div>
    <div class="d-flex flex-row align-items-center">
      <img
        src="../../assets/prfile_temp_3.png"
        alt="..."
        class="rounded-circle"
      />

      <div class="ms-3">
        <p class="fs-6 mb-0 pb-0">
          <i class="bi bi-trophy-fill" style="color: brown"></i> 여기서
          만족인가요?
        </p>
        <p class="fs-4 fw-bold">{{ ranker[2].userName }}</p>
      </div>
    </div>
  </div>

  <div v-else>랭킹에 표시할 top3 정복자가 없습니다.</div>
</template>

<style scoped></style>
