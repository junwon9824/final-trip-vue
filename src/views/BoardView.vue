<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const article = ref({});
const liked = ref(false);

const getdetaillist = async () => {
  try {
    const response = await axios.get(
      "http://localhost:80/article/view?articleno=2"
    );

    article.value = response.data;
    liked.value = response.data.likedByUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
const toggleLike = async () => {
  const newLikeStatus = !liked.value; // 미리 상태를 변경하지 않고, 요청을 보낸 후 성공적인 응답을 받았을 때 상태를 변경

  try {
    const response = await axios.post(
      "http://localhost:80/article/likes?articleNo=" + article.value.articleNo
      // ,{
      //   articleNo: article.value.articleNo,
      // }
    );

    // 응답으로 받은 좋아요 수와 상태를 업데이트합니다.
    if (response.data.success) {
      article.value.likes = response.data.likes;
      liked.value = newLikeStatus; // 서버의 응답을 바탕으로 상태를 업데이트
      console.log(article.value.likes);
    }
  } catch (error) {
    console.error(error);
    // 여기서 사용자에게 에러가 발생했다는 것을 알리는 UI 피드백을 제공할 수 있음
  }
};

onMounted(getdetaillist);
</script>

<template>
  <div
    class="container bg-info d-flex align-items-center flex-column py-4 rounded-4"
  >
    <div class="col-10 d-flex flex-row justify-content-between">
      <div class="d-flex flex-row align-items-center">
        <!-- 이미지props로 받기 -->
        <img
          src="../assets/prfile_temp_2.png"
          class="img-fluid rounded-circle d-block"
          alt="..."
          style="width: 100px; height: 100px; object-fit: fill"
        />
        <div class="ps-3 pt-4">
          <!-- 이름 게시일 props로 받기 -->
          <p class="text-center mb-1 fw-bold fs-5">{{ article.userName }}</p>
          <p class="text-center fw-light fs-7">{{ article.registerTime }}</p>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center">
        <button
          :class="{ 'btn-like-active': liked }"
          class="btn btn-light"
          type="button"
          @click="toggleLike"
        >
          <i class="bi bi-hand-thumbs-up"></i>{{ article.likes }}
        </button>
      </div>
    </div>
    <div class="col-10 mt-4">
      <p class="fs-4 fb-bold mx-3">{{ article.subjects }}</p>
    </div>
    <div class="col-10 mt-4 mb-4">
      <p class="fs-6 mx-3">
        {{ article.content }}
      </p>
    </div>
  </div>
</template>

<style scoped >
.btn-like-active {
  color: green; /* 좋아요가 활성화된 상태일 때의 색깔 */
}
</style>
