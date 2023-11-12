<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps([
  "userId",
  "userName",
  "address",
  "conqueredMountains",
]);

const router = useRouter();

const deleteUser = () => {
  // 사용자를 탈퇴하는 로직을 구현
  // ...

  // 탈퇴 후 로그인 페이지로 이동
  router.push("/login");
};

// 기타 필요한 로직 추가
</script>

<template>
  <div class="card bg-info text-dark rounded-pill d-flex justify-content-around">
    <div class="card-body flex-shrink-0 d-flex">
      <div class="flex-shrink-0">
        <button class="btn btn-primary rounded-pill text-white" @click="deleteUser">
          회원탈퇴
        </button>
      </div>
      <div class="flex-shrink-0">
        <img src="..." alt="..." class="rounded-circle" />
      </div>
      <div class="flex-grow-1 ms-3">
        <h5>ID: {{ props.userId }}</h5>
        <h5>이름: {{ props.userName }}</h5>
        <h5>주소: {{ props.address }}</h5>
        <h5>내가 정복한 산: {{ props.conqueredMountains }}</h5>
      </div>

      <div class="">
        <router-link to="/modify" class="btn btn-primary rounded-pill text-white">
          수정
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
