<template>
  <div class="container mt-5">
    <div class="row position-relative">
      <div class="col-md-8 bg-light rounded-5 shadow">
        <div class="d-flex mt-3 mb-3">
          <div class="dropdown pe-3" style="z-index: 1000">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              시/도
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <!-- 드롭다운 메뉴 아이템들 -->
              <li><a class="dropdown-item" href="#">메뉴 항목 1</a></li>
              <li><a class="dropdown-item" href="#">메뉴 항목 2</a></li>
              <li><a class="dropdown-item" href="#">메뉴 항목 3</a></li>
            </ul>
          </div>

          <div class="dropdown" style="z-index: 1000">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              구/군
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
              <!-- 드롭다운 메뉴 아이템들 -->
              <li><a class="dropdown-item" href="#">메뉴 항목 1</a></li>
              <li><a class="dropdown-item" href="#">메뉴 항목 2</a></li>
              <li><a class="dropdown-item" href="#">메뉴 항목 3</a></li>
            </ul>
          </div>
        </div>

        <div id="map" style="height: 500px"></div>
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

      <div class="col-md-4">
        <img :src="folderimg" class="card-img" alt="..." style="height: 100%" />
        <div class="card-img-overlay d-flex flex-column align-items-end">
          <div class="mt-4 me-5">
            <div class="d-flex justify-content-around ms-4">
              <button type="button" class="btn text-primary" @click="closest()">
                가까운 순 <i class="bi bi-chevron-down"></i>
              </button>
              <button type="button" class="btn text-primary" @click="high()">
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
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RecommendCard from '../components/Plan/RecommendCard.vue';
import MyWishList from '../components/wishlist/MyWishList.vue';

const wishlists = [
  {
    mntilistno: 1,
    memberid: 'user123',
    mntiname: 'Mountain A',
    mntidetails: 'Details about Mountain A',
    mntiadd: '전라북도 고창군',
    mntihigh: 1500,
    sido_code: 1,
    gugun_code: 101,
    mntiimg: 'url_to_image_A',
    memberconquerednum: 3,
  },
  {
    mntilistno: 2,
    memberid: 'user456',
    mntiname: 'Mountain B',
    mntidetails: 'Details about Mountain B',
    mntiadd: '전라남도 화순군',
    mntihigh: 2000,
    sido_code: 2,
    gugun_code: 202,
    mntiimg: 'url_to_image_B',
    memberconquerednum: 5,
  },
  // Add more items as needed
];
const items = [
  {
    mntilistno: 1,
    memberid: 'user123',
    mntiname: 'Mountain A',
    mntidetails: 'Details about Mountain A',
    mntiadd: 'Address of Mountain A',
    mntihigh: 1500,
    sido_code: 1,
    gugun_code: 101,
    mntiimg: 'url_to_image_A',
    memberconquerednum: 3,
  },
  {
    mntilistno: 2,
    memberid: 'user456',
    mntiname: 'Mountain B',
    mntidetails: 'Details about Mountain B',
    mntiadd: 'Address of Mountain B',
    mntihigh: 2000,
    sido_code: 2,
    gugun_code: 202,
    mntiimg: 'url_to_image_B',
    memberconquerednum: 5,
  },
  // Add more items as needed
];

onMounted(() => {
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

<style scoped>
/* 필요한 스타일이 있다면 여기에 추가 */
</style>
