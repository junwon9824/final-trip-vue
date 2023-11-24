<script setup>
import { ref, onMounted } from "vue";
import MainCard from "../components/Main/MainCard.vue";
import axios from "axios";
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const isDialogOpen1 = ref(false);
const isDialogOpen2 = ref(false);
// const popupImage = ref("https://via.placeholder.com/150");
onMounted(() => {
  isDialogOpen1.value = true;
  isDialogOpen2.value = true;
});

const closeDialog1 = () => {
  isDialogOpen1.value = false;
};
const closeDialog2 = () => {
  isDialogOpen2.value = false;
};

const banneritems = [
  {
    title: "Carousel Slider",
    description: "Carousel를 이용한 이미지 슬라이드 효과",
    menus: [
      {
        image: "src/assets/bannergood.jpg",
        alt: "image1",
      },
      {
        image: "src/assets/river.jpg",
        alt: "image1",
      },
      {
        image: "src/assets/snowmountain.jpg",
        alt: "image1",
      },
      {
        image: "src/assets/lake.jpg",
        alt: "image1",
      },
      {
        image: "src/assets/truebsee.jpg",
        alt: "image1",
      },
    ],
  },
];

const imgitems = [
  {
    title: "Carousel Slider",
    description: "Carousel를 이용한 이미지 슬라이드 효과",
    menus: [
      {
        image: "src/assets/001.png",
        alt: "image1",
      },
      {
        image: "src/assets/002.png",
        alt: "image1",
      },
      {
        image: "src/assets/003.png",
        alt: "image1",
      },
    ],
  },
];

const items = ref([
  {
    mntiname: "무등산",
    mntilistno: "431502001",
    mntiimg: "src/assets/mumountain.png",
  },
  {
    mntiname: "민둥산",
    mntilistno: "418201701",
    mntiimg: "src/assets/minmountain.jpeg",
  },
  {
    mntiname: "방태산",
    mntilistno: "428102201",
    mntiimg: "src/assets/bangmountain.jpeg",
  },
]);
const items2 = ref([
  {
    mntiname: "단석산",
    mntilistno: "471301101",
    mntiimg: "src/assets/danmountain.jpeg",
  },
  {
    mntiname: "계방산",
    mntilistno: "427206801",
    mntiimg: "src/assets/gyaemountain.jpeg",
  },
  {
    mntiname: "감악산",
    mntilistno: "414800101",
    mntiimg: "src/assets/gammountain.png",
  },
]);
</script>

<template>
  <div v-if="isDialogOpen1" class="image-popup">
    <!-- <img src="src/assets/정기산행공지.png" alt="Popup Image" /> -->
    <img src="src/assets/첫눈맞이등산.png" alt="Popup Image" />
    <button @click="closeDialog1">닫기</button>
  </div>
  <div v-if="isDialogOpen2" class="image-popup">
    <img src="src/assets/정기산행공지.png" alt="Popup Image" />
    <!-- <img src="src/assets/겨울산행전대비.png" alt="Popup Image" /> -->
    <button @click="closeDialog2">닫기</button>
  </div>
  <div class="wrapper">
    <div class="image_slider col-lg-12" slideWidth="100%">
      <carousel :items-to-show="1" :wrapAround="true" :autoplay="5000">
        <slide v-for="slide in banneritems[0].menus" :key="slide">
          <div class="carousel__item">
            <figure>
              <img :src="slide.image" :alt="slide.alt" />
            </figure>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <div class="d-flex flex-column mt-5 align-items-center">
      <div
        class="d-flex flex-row justify-content-center align-items-center col-10 mx-5"
      >
        <p class="text-secondary fw-bold fs-4 px-5 mx-5">이번 달 추천 산</p>

        <router-link to="/search">
          <button
            class="btn btn-secondary rounded-pill btn-lg fs-4"
            id="searchmtn"
          >
            산을 검색해 보세요 <i class="bi bi-search"></i>
          </button>
        </router-link>
      </div>

      <div class="d-flex flex-column align-items-center">
        <div class="d-flex flex-row">
          <MainCard
            v-for="item in items"
            :key="item.mntilistno"
            :MainCard="item"
          ></MainCard>
        </div>
        <div class="d-flex flex-row">
          <MainCard
            v-for="item in items2"
            :key="item.mntilistno"
            :MainCard="item"
          ></MainCard>
        </div>
      </div>
      <!-- <img src="src/assets/가을기념단풍산행.png" alt="Popup Image" /> -->
      <div class="col-10 image_slider" slideWidth="100%">
        <carousel :items-to-show="1" :wrapAround="true" :autoplay="5000">
          <slide v-for="slide in imgitems[0].menus" :key="slide">
            <div class="m-0 p-0">
              <figure>
                <img
                  :src="slide.image"
                  :alt="slide.alt"
                  style="object-fit: contain"
                />
              </figure>
            </div>
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
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
#first_snow {
  width: 40%;
}

.image-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 15px;
  z-index: 1001;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 800px; /* 팝업창의 최대 너비를 줄임 */
}

.image-popup img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.image-popup button {
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(43, 107, 43);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
