<script setup>
import { onMounted, ref, watch } from 'vue';
import RecommendCard from '../components/Plan/RecommendCard.vue';
import MyWishList from '../components/wishlist/MyWishList.vue';
import {
  listSido,
  listGugun,
  getMountainList,
  getUnconqueredMountainsAscendingByHeight,
  getNearestUnconqueredMountains,
} from '../api/mountain';
import { getWishList } from '../api/wishlist';

const sidoList = ref([]);
const gugunList = ref([]);
const selectedSido = ref('시/도');
const selectedGugun = ref('구/군');
const mountains = ref([]);
const positions = ref([]);
const markers = ref([]);
var map;
const wishlists = ref([]);
const items = ref([]);

const sidogugun = ref({
  sido_code: 0,
  sido_name: '',
  gugun_code: 0,
  gugun_name: '',
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
  sidogugun.value.sido_code = selectedSido.value;
  sidogugun.value.gugun_code = selectedGugun.value;
  getMountain();
};

const getMountain = () => {
  getMountainList(
    sidogugun.value,
    ({ data }) => {
      mountains.value = [];
      data.forEach((mountain) => {
        mountains.value.push(mountain);
      });

      console.log(mountains.value);
    },
    (err) => {
      console.log(err);
    }
  );
};
watch(
  () => mountains.value,
  () => {
    positions.value = [];
    mountains.value.forEach((mountain) => {
      let obj = {};
      if (mountain.lat == 0) return;
      obj.latlng = new kakao.maps.LatLng(mountain.lat, mountain.lng);
      obj.title = mountain.mntiname;

      positions.value.push(obj);
    });
    loadMarkers();
  },
  { deep: true }
);

const loadMarkers = () => {
  // 현재 표시되어있는 marker들이 있다면 map에 등록된 marker를 제거한다.
  deleteMarkers();

  // 마커 이미지를 생성합니다
  //   const imgSrc = require("@/assets/map/markerStar.png");
  // 마커 이미지의 이미지 크기 입니다
  //   const imgSize = new kakao.maps.Size(24, 35);
  //   const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);

  // 마커를 생성합니다
  markers.value = [];
  positions.value.forEach((position) => {
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: position.latlng, // 마커를 표시할 위치
      title: position.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됨.
      clickable: true, // // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      // image: markerImage, // 마커의 이미지
    });
    markers.value.push(marker);
  });

  // 4. 지도를 이동시켜주기
  // 배열.reduce( (누적값, 현재값, 인덱스, 요소)=>{ return 결과값}, 초기값);
  const bounds = positions.value.reduce(
    (bounds, position) => bounds.extend(position.latlng),
    new kakao.maps.LatLngBounds()
  );

  map.setBounds(bounds);
};

const deleteMarkers = () => {
  if (markers.value.length > 0) {
    markers.value.forEach((marker) => marker.setMap(null));
  }
};

onMounted(() => {
  getSidoList();
  getWishLists();
  getNearItems();
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

      map = new kakao.maps.Map(container, options);
      // 원하는 위치에 마커 추가 등 다양한 기능을 수행할 수 있습니다.
    });
  };
});

const getWishLists = () => {
  wishlists.value = [];
  getWishList(
    { userId: sessionStorage.userId },
    ({ data }) => {
      data.forEach((mountain) => {
        wishlists.value.push(mountain);
      });
      console.log(wishlists.value);
    },
    (err) => {
      console.log(err);
    }
  );
};

const folderimg = ref('src/assets/recommend_img1.png');

const closest = () => {
  folderimg.value = 'src/assets/recommend_img1.png';
  getNearItems();
};
const high = () => {
  folderimg.value = 'src/assets/recommend_img2.png';
  getHighItems();
};
const getHighItems = () => {
  items.value = [];
  getUnconqueredMountainsAscendingByHeight(
    { memberId: sessionStorage.userId },
    ({ data }) => {
      data.forEach((mountain) => {
        items.value.push(mountain);
      });
      console.log(items.value);
    },
    (err) => {
      console.log(err);
    }
  );
};
const getNearItems = () => {
  items.value = [];
  getNearestUnconqueredMountains(
    { memberId: sessionStorage.userId },
    ({ data }) => {
      items.value = [];
      data.forEach((mountain) => {
        items.value.push(mountain);
      });
      console.log(items.value);
    },
    (err) => {
      console.log(err);
    }
  );
};
</script>

<template>
  <div class="d-flex flex-row mt-5 justify-content-center" style="width: 100%">
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
            @change="onChangeGugun()"
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
      class="col-3 d-flex flex-column"
      :style="{ 'background-image': 'url(' + folderimg + ')' }"
      style="background-repeat: no-repeat; background-size: cover; height: 100%"
    >
      <div class="mt-4 ms-5">
        <div class="d-flex flex-row">
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
        <div class="d-flex flex-wrap d-flex flex-column align-items-center">
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
