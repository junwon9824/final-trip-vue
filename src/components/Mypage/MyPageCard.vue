<script setup>
import { defineProps, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
// const props = defineProps(['userId', 'userName', 'address', 'conqueredMountains']);

const router = useRouter();

const userIdvalue = sessionStorage.getItem("userId");
const userName = ref("");
const address = ref("");
const num = ref(0);
const imgurl = ref("");
const props = defineProps({
  MainCard: Object,
});

const getmydata = async () => {
  try {
    const response = await axios.get("http://localhost:80/user/getinfo", {
      params: {
        userId: userIdvalue,
      },
    });

    userName.value = response.data.userName;
    address.value = response.data.address;
    imgurl.value = response.data.imgurl;
    console.log("getttt" + response.data.userId);
    console.log("getttt" + response.data.userName);
    console.log("getttt" + response.data.address);
    console.log("getttt" + response.data.imgurl);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

onMounted(getmydata);

const gettotalconquerednum = async () => {
  try {
    console.log("idddddddddddddd" + userIdvalue);

    const response = await axios.get(
      "http://localhost:80/mountain/gettotalconquered",
      {
        params: {
          userId: userIdvalue,
        },
      }
    );

    console.log("getttt" + response.data.userId);
    num.value = response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

onMounted(gettotalconquerednum);

const deleteUser = async () => {
  try {
    const response = await axios.delete("http://localhost:80/user/delete", {
      params: {
        userId: userIdvalue,
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  // 탈퇴 후 로그인 페이지로 이동
  router.push("/login");
};

// 기타 필요한 로직 추가
</script>

<template>
  <div
    class="card bg-info text-dark rounded-4 d-flex justify-content-center align-items-center py-5 mt-5"
  >
    <div class="d-flex justify-content-center align-items-center">
      <img
        :src="imgurl"
        class="img-fluid rounded-circle mx-auto d-block"
        alt="이미지를 등록해주세요."
        style="width: 200px"
      />

      <div class="flex-grow-1 ms-5">
        <p class="fs-4">ID: {{ userIdvalue }}</p>
        <p class="fs-4">이름: {{ userName }}</p>
        <p class="fs-4">주소: {{ address }}</p>
        <p class="fs-4">정복 수: {{ num }}</p>
      </div>
    </div>

    <div class="d-flex justify-content-around pt-4" style="width: 100%">
      <button
        class="btn btn-success rounded-3 text-white px-4"
        @click="deleteUser"
      >
        회원탈퇴
      </button>

      <router-link
        to="/modify"
        class="btn btn-success rounded-3 text-white px-4"
      >
        수정
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
