<script setup></script>

<template>
  <div class="col-lg-12">
    <img
      src="@/assets/banner.png"
      class="img-fluid rounded mx-auto d-block"
      alt="..."
    />
  </div>

  <div class="d-flex">
    <p>아래 산들도 정복 해 보세요!</p>
    <router-link to="/search">
      <button>산을 검색해 보세요</button>
    </router-link>


  </div>

</template>


<style scoped>
img {
  width: 100%;
  max-width: 100%; /* 이미지의 최대 너비를 화면 크기에 맞게 조절 */
  height: auto; /* 가로 너비에 따라 세로 비율을 유지 */
}
</style>
