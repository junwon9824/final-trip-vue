<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  RecommendCard: Object,
});

const addToWishlist = () => {
   console.log("위시리스트에 추가되었습니다.", props.RecommendCard.mntiname);
};
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 mx-auto"> <!-- Adjust the width by changing col-md-6 -->
        <div class="card position-relative">
          <div>{{ props.RecommendCard.gugun_code }}</div>

          <div class="card-body d-flex">
            <img
              src="@/assets/mountain_car.png"
              class="img-fluid rounded mx-auto d-block"
              alt="..."
            />

            <div class="text-container">

              <h1
                class="card-title mb-0 position-absolute top-30 start-50 translate-middle"
              >
                {{ props.RecommendCard.mntiname }}
              </h1>
              <p
                class="card-text position-absolute bottom-0 start-50 translate-middle"
              >
                {{ props.RecommendCard.mntidetails }}
              </p>


            </div>

            
          </div>

          <!-- Use router-link instead of div for wishlist -->
          <router-link to="/plan" @click="addToWishlist">
            내 위시리스트 담기
          </router-link>
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

.card-title,
.card-text {
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  margin: 0;
}

.card-title {
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}

.card-text {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
