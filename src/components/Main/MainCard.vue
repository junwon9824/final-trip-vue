<script setup>
import { ref,onMounted ,onUpdated,onBeforeMount } from 'vue';

const props=defineProps({
    MainCard: Object,
});

const tmpImgSrc = ref('');

onBeforeMount(() => {
  
  tmpImgSrc.value = props.MainCard.mntiimg;
  console.log("Image source after mounted:", tmpImgSrc.value);
});


</script>

<template> 
    <div class="card shadow-lg m-4" style="width: 600px">
        <!-- <img class="card-img-top" src="../../assets/mountain_car.png" alt="Card image" /> -->
        <img class="card-img-top" :src="tmpImgSrc" alt="Card image" />

        <div class="card-img-overlay d-flex justify-content-between align-items-center flex-column">
            <p class="card-title text-light fs-2 fw-bold">{{ MainCard.mntiname }}</p>
            <RouterLink to="/">

            <button class="btn btn-light btn-lg rounded-pill px-4 py-2">
                둘러보기<i class="bi bi-arrow-right"></i>
            </button>

          </RouterLink>

        </div>
    </div>
 </template>
<style scoped></style>
