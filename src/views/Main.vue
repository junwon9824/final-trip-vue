<script setup>
import MainCard from "@/components/board/MainCard.vue";

const items = [ 
  {
    mntilistno: 1,
    memberid: "user123",
    mntiname: "Mountain A",
    mntidetails: "Details about Mountain A",
    mntiadd: "Address of Mountain A",
    mntihigh: 1500,
    sido_code: 1,
    gugun_code: 101,
    mntiimg: "url_to_image_A",
    memberconquerednum: 3,
  },
  {
    mntilistno: 2,
    memberid: "user456",
    mntiname: "Mountain B",
    mntidetails: "Details about Mountain B",
    mntiadd: "Address of Mountain B",
    mntihigh: 2000,
    sido_code: 2,
    gugun_code: 202,
    mntiimg: "url_to_image_B",
    memberconquerednum: 5,
  },
  // Add more items as needed
];

 </script>

<template>
  <div class="col-lg-12">
    <img
      src="@/assets/banner.png"
      class="img-fluid rounded mx-auto d-block"
      alt="..."
    />
  </div>

  <div class="d-flex align-items-center mt-3">
    <p class="mr-3">아래 산들도 정복 해 보세요!</p>
    
    <router-link to="/search">
        <button class="btn btn-primary" id="searchmtn">산을 검색해 보세요</button>
    </router-link>


    <!-- <BoardCard
          v-for="item in items"
          :key="item.articleNo"
          :board="item"
        ></BoardCard> -->

  </div>

  <div class="d-flex">
      <MainCard v-for="item in items" :key="item.mntilistno" :MainCard="item"></MainCard>
    </div>

</template>

<style scoped>
img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

p{
    margin-left: 10%;
}
#searchmtn {
     margin-left: 500px;  

}


</style>
