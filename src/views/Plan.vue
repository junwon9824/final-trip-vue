<script setup>
import { onMounted, ref } from 'vue';
import RecommendCard from '../components/Plan/RecommendCard.vue';
import MyWishList from '../components/wishlist/MyWishList.vue';
import { listSido, listGugun } from '../api/mountain';
const { VITE_OPEN_API_SERVICE_KEY } = import.meta.env;

const sidoList = ref([]);
const gugunList = ref([]);
const selectedSido = ref('시/도');
const selectedGugun = ref('구/군');

const param = ref({
  sidoCode: 0,
  gugunCode: 0,
});

const onChangeSido = (val) => {
  listGugun(
    { sido: val },
    ({ data }) => {
      let options = [];
      data.forEach((gugun) => {
        options.push({ text: gugun.gugun_name, value: gugun.gugun_code });
      });
      gugunList.value = options;
      console.log(gugunList.value);
    },
    (err) => {
      console.log(err);
    }
  );
  
};

const getSidoList = () => {
  listSido(
    ({ data }) => {
      let options = [];

      data.forEach((sido) => {
        options.push({ text: sido.sido_name, value: sido.sido_code });
      });
      sidoList.value = options;
    },
    (err) => {
      console.log(err);
    }
  );
};

const onChangeGugun = () => {
  param.value.sidoCode = selectedSido.value;
  param.value.gugunCode = selectedGugun.value;
  console.log(selectedGugun.value)
  console.log(param.value.gugunCode )
};

onMounted(() => {
  getSidoList();
  // 카카오맵 API 스크립트 로드
  const script = document.createElement('script');
  script.src =
    'https://dapi.kakao.com/v2/maps/sdk.js?appkey=1cb3368408f311c9f8b57defc83d416f&autoload=false';
  document.head.appendChild(script);

  script.onload = () => {
    // 카카오맵 초기화
    kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);
      // 원하는 위치에 마커 추가 등 다양한 기능을 수행할 수 있습니다.
    });
  };
});

const folderimg = ref('src/assets/recommend_img1.png');

const closest = () => {
  folderimg.value = 'src/assets/recommend_img1.png';
};
const high = () => {
  folderimg.value = 'src/assets/recommend_img2.png';
};
</script>

<template>
  <div class="d-flex flex-row m-5">
    <div class="col-8 bg-light rounded-5 shadow">
      <div class="d-flex flex-column m-3 col-12">
        <div class="form d-flex flex-row col-2 mb-3">
          <select
            class="form-select bg-secondary fw-bold text-white"
            v-model="selectedSido"
            @change="onChangeSido(selectedSido)"
          >
            <option selected disabled>시/도</option>
            <option v-for="sido in sidoList" :key="sido.value" :value="sido.value">
              {{ sido.text }}
            </option>

          </select>

          <select
            class="form-select bg-secondary fw-bold text-white"
            v-model="selectedGugun"
            @change="onChangeGugun"
          >
            <option selected disabled>구/군</option>
            <option v-for="gugun in gugunList" :key="gugun.value" :value="gugun.value">
              {{ gugun.text }}
            </option>
          </select>

        </div>

        <div id="map" style="height: 500px; width: 97%"></div>
        <div class="mt-3 p-3">

          <div class="d-flex align-items-start">
            <div
              class="rounded-circle bg-warning d-flex justify-content-center align-items-center me-2"
              style="width: 22px; height: 22px"
            >
              <i class="bi bi-suit-heart-fill text-danger"></i>
            </div>
            <p class="fw-bold fs-5">내 위시리스트</p>
          </div>

          <div class="d-flex">
            <MyWishList
              v-for="wishlist in wishlists"
              :key="wishlist"
              :wishlist="wishlist"
            ></MyWishList>
          </div>

        </div>
      </div>
    </div>
    <div
      class="col-4 d-flex flex-column"
      :style="{ 'background-image': 'url(' + folderimg + ')' }"
      style="background-repeat: no-repeat"
    >
      <div class="mt-4 ms-5">
        <div class="d-flex flex-row mt-1">
          <button type="button" class="btn text-primary ms-3 me-4" @click="closest()">
            가까운 순 <i class="bi bi-chevron-down"></i>
          </button>
          <button type="button" class="btn text-primary ms-5" @click="high()">
            해발 고도 순 <i class="bi bi-chevron-down"></i>
          </button>
        </div>
        <p class="fs-5 mt-3 fw-bold">
          <i class="bi bi-geo-alt-fill me-2 text-danger"></i>이런 산은 어때요?
        </p>
        <div class="d-flex flex-wrap d-flex flex-column">
          <RecommendCard
            v-for="item in items"
            :key="item.mntilistno"
            :RecommendCard="item"
          ></RecommendCard>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 필요한 스타일이 있다면 여기에 추가 */
</style>
