<template>
  <div v-if="mountainDetail" class="content-container">
    <div class="mountain-container">
      <!-- API에서 가져온 산의 이미지를 표시 -->
      <img :src="completeImageUrl" class="mountain-image" alt="" height="400" />

      <!-- 산의 이름과 상세 정보를 표시 -->
      <div class="mountain-info">
        <h1 class="mountain-name">{{ mountainDetail.mntiname }}</h1>
        <p class="mountain-details">{{ mountainDetail.mntidetails }}</p>
      </div>
    </div>

    <div class="additional-info">
      <MountainConqueror
        v-if="showMountainConqueror"
        :ranker="items"
      ></MountainConqueror>
      <RecordCard class="mt-5" :records="items"></RecordCard>
    </div>
  </div>
</template>

<script setup>
import MountainConqueror from "../components/mountain/MountainConqueror.vue";
import RecordCard from "../components/mountain/RecordCard.vue";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const mountainDetail = ref(null);

// const items = [
//   {
//     mntilistno: 1,
//     mntiname: "Mountain A",
//     mntidetails: "Details about Mountain A",
//     mntiadd: "Address of Mountain A",
//     mntihigh: 1500,
//     sido_code: 1,
//     gugun_code: 101,
//     mntiimg: "url_to_image_A",
//     mnticonquerednum: 3,
//     date: "2023-11-10 12:34:56",
//     rank: 2,
//     name: "zahi",
//     count: 5,
//   },

//   {
//     mntilistno: 2,
//     mntiname: "Mountain B",
//     mntidetails: "Details about Mountain B",
//     mntiadd: "Address of Mountain B",
//     mntihigh: 2000,
//     sido_code: 2,
//     gugun_code: 202,
//     mntiimg: "url_to_image_B",
//     mnticonquerednum: 5,
//     date: "2023-11-11 10:45:30",
//     rank: 4,
//     name: "Milad",
//     count: 3,
//   },
//   {
//     mntilistno: 2,
//     mntiname: "Mountain B",
//     mntidetails: "Details about Mountain B",
//     mntiadd: "Address of Mountain B",
//     mntihigh: 2000,
//     sido_code: 2,
//     gugun_code: 202,
//     mntiimg: "url_to_image_B",
//     mnticonquerednum: 5,
//     date: "2023-11-11 10:45:30",
//     rank: 4,
//     name: "Arash",
//     count: 1,
//   },
// ];

const items = ref([]);
const showMountainConqueror = ref(false);

onMounted(async () => {
  console.log("rr" + route.params.id);
  const mountainId = route.params.id;
  try {
    const response = await axios.get(
      `http://localhost:80/mountain/getdetail/${mountainId}`
    );
    console.log("response.data" + response.data.mntiimg);
    console.log("response.data" + response.data.mntilistno);

    mountainDetail.value = response.data;
    console.log("mountainDetail.value " + mountainDetail.value.mntilistno);

    try {
      const response2 = await axios.get(
        `http://localhost:80/mountain/getrank3`,
        {
          params: {
            // mntilistno: mountainDetail.value.mntilistno,
            mntilistno: 111100101,
          },
        }
      );

      console.log("response.data", mountainDetail.value.mntilistno);

      console.log("response.data", response2.data);

      items.value = response2.data;
      showMountainConqueror.value = true;

      console.log("response.data", items.value);
    } catch (error) {
      console.error(error);
    }

    completeImageUrl;
  } catch (error) {
    console.error(error);
  }
});

const completeImageUrl = computed(() => {
  return `https://www.forest.go.kr/images/data/down/mountain/${mountainDetail.value.mntiimg}`;
});
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white; /* 밝은 배경색 */
  padding: 20px;
}

.mountain-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f4f4f4; /* 전체 배경색 변경 */

  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.mountain-image {
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 15px; /* 이미지 테두리 반경 */
  margin-right: 20px;
}

.mountain-info {
  max-width: 50%;
  text-align: left;
  color: #333; /* 텍스트 색상 */
}

.mountain-name {
  font-size: 2em; /* 제목 크기 */
  font-weight: bold; /* 글씨 굵기 */
  margin-bottom: 15px;
}

.mountain-details {
  font-size: 1.2em; /* 본문 크기 */
  line-height: 1.6; /* 줄 간격 */
}

.additional-info {
  width: 80%;
  margin-top: 20px;
}
</style>
