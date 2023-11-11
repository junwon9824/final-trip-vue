<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  'MainCard': Object
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="card position-relative">
          <div class="card-body">
            <img
              src="@/assets/mountain_car.png"
              class="img-fluid rounded mx-auto d-block"
              alt="..."
            />
            <div class="text-container">
              <h1 class="card-title mb-0 position-absolute top-30 start-50 translate-middle">
                {{ MainCard.mntiname }}
              </h1>
              <p class="card-text position-absolute bottom-0 start-50 translate-middle">
                둘러보기
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  position: relative;
}

.card-body {
  position: relative;
}

.card-body img {
  width: 100%;
  height: auto;
}

.text-container {
  position: relative;
  text-align: center;
}

.card-title, .card-text {
  color: white; /* Set the text color */
  background-color: rgba(0, 0, 0, 0.7); /* Set the background color with transparency */
  padding: 10px; /* Adjust padding as needed */
  margin: 0; /* Remove margin to bring text higher */
}

.card-title {
  top: 40%; /* Adjust the percentage to move the title higher */
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-text {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
