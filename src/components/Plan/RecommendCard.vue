<script setup>
import { defineProps, ref, defineEmits } from "vue";
import { addWishList } from "@/api/wishlist";

defineProps({
  RecommendCard: Object,
});
const emit = defineEmits(["getWishLists"]);
const prefix = "https://www.forest.go.kr/images/data/down/mountain";
const wish = ref({
  userId: "",
  mntilistno: "",
  memberid: "",
  mntiname: "",
  mntidetails: "",
  mntiadd: "",
  mntihigh: "",
  sido_code: 0,
  gugun_code: 0,
  mntiimg: "",
  memberconquerednum: "",
  conquereddate: "",
  lat: "",
  lng: "",
});

const addToWishlist = (mntilistno) => {
  wish.value.userId = sessionStorage.userId;
  wish.value.mntilistno = mntilistno;

  addWishList(
    wish.value,
    ({ data }) => {
      console.log(data);
      emit("getWishLists");
    },
    (err) => {
      if (error.response) {
        // 서버가 응답하지만, 요청이 실패한 경우
        console.log(
          "Server responded with a non 2xx response",
          error.response.data
        );
      } else if (error.request) {
        // 서버로 요청을 보냈지만 응답을 받지 못한 경우
        console.log("No response received", error.request);
      } else {
        // 요청 전에 문제가 발생한 경우
        console.log("Error setting up the request", error.message);
      }
    }
  );
};
</script>

<template>
  <div class="card mb-4 shadow-sm" style="max-width: 380px; height: 190">
    <div class="d-flex flex-row g-0 me-4">
      <div class="col-5 m-2">
        <img
          :src="`${prefix}/${RecommendCard.mntiimg}`"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-7 my-2 d-flex flex-column align-items-start">
        <button
          type="button"
          class="btn btn-dark rounded-pill btn-sm mb-2 fs-8"
        >
          {{
            RecommendCard.mntiadd.substring(0, RecommendCard.mntiadd.length - 3)
          }}
        </button>
        <p class="fs-5 fw-bold mb-2">{{ RecommendCard.mntiname }}</p>
        <p
          class="fs-6 pb-3"
          style="
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            height: 20px;
          "
        >
          {{ RecommendCard.mntidetails }}
        </p>
        <button
          type="button"
          class="btn btn-sm m-0 p-0 text-white-80"
          @click="addToWishlist(RecommendCard.mntilistno)"
        >
          내 위시리스트 담기
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
