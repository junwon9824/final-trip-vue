<script setup>
import MainCard from "../components/Main/MainCard.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const prefix = "www.forest.go.kr/images/data/down/mountain";

const items = ref([
  //   {
  //     mntilistno: 1,
  //     memberid: 'user123',
  //     mntiname: 'Mountain A',
  //     mntidetails: 'Details about Mountain A',
  //     mntiadd: 'Address of Mountain A',
  //     mntihigh: 1500,
  //     sido_code: 1,
  //     gugun_code: 101,
  //     mntiimg: 'url_to_image_A',
  //     memberconquerednum: 3,
  //   },
  //   {
  //     mntilistno: 2,
  //     memberid: 'user456',
  //     mntiname: 'Mountain B',
  //     mntidetails: 'Details about Mountain B',
  //     mntiadd: 'Address of Mountain B',
  //     mntihigh: 2000,
  //     sido_code: 2,
  //     gugun_code: 202,
  //     mntiimg: 'url_to_image_B',
  //     memberconquerednum: 5,
  //   },
  // Add more items as needed
]);

const getrandomMountain = async () => {
  console.log("innn");

  try {
    const response = await axios.get(
      "http://localhost:80/mountain/random2",
      {}
    );

    console.log(response.data);

    items.value = response.data.map(item => ({
      ...item,
      mntiimg: `${prefix}/${item.mntiimg}` // 이미지 URL에 prefix 추가
    }));

    // items.value = response.data;

    console.log(items.value);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

onMounted(getrandomMountain);
</script>
 
<template>
  <div>
    <div class="col-lg-12 d-flex justify-content-between align-items-center flex-column">
      <img src="@/assets/bannergood.jpg" class="img-fluid rounded mx-auto d-block" alt="..." />
    </div>

    <div class="d-flex flex-column mt-5 align-items-center">
      <div class="d-flex justify-content-between align-items-center col-10">
        <p class="text-secondary fw-bold fs-4 px-5 m-0">아래 산들도 정복 해 보세요!</p>

        <router-link to="/search">
          <button class="btn btn-secondary rounded-pill btn-lg fs-4" id="searchmtn">
            산을 검색해 보세요 <i class="bi bi-search"></i>
          </button>
        </router-link>
      </div>

      <div class="d-flex align-items-center col-10">
        <MainCard v-for="item in items" :key="item.mntilistno" :MainCard="item"></MainCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  max-width: 100%;
  height: 600px;
}

p {
  margin-left: 10%;
}

#searchmtn {
  margin-left: 500px;
}
</style>
