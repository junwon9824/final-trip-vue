<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['userId', 'userName', 'address', 'conqueredMountains']);

const router = useRouter();

const deleteUser = () => {
  // 사용자를 탈퇴하는 로직을 구현
  // ...

  // 탈퇴 후 로그인 페이지로 이동
  router.push('/login');
};

// 기타 필요한 로직 추가
</script>

<template>
  <div
    class="card bg-info text-dark rounded-4 d-flex justify-content-center align-items-center py-5 mt-5"
  >
    <div class="d-flex justify-content-center align-items-center">
      <img
        src="@/assets/mountain_car.png"
        class="img-fluid rounded-circle mx-auto d-block"
        alt="..."
        style="width: 200px"
      />
      <div class="flex-grow-1 ms-5">
        <p class="fs-4">ID: {{ props.userId }}</p>
        <p class="fs-4">이름: {{ props.userName }}</p>
        <p class="fs-4">주소: {{ props.address }}</p>
        <p class="fs-4">정복 수: {{ props.conqueredMountains }}</p>
      </div>
    </div>

    <div class="d-flex justify-content-around pt-4" style="width: 100%">
      <button class="btn btn-success rounded-3 text-white px-4" @click="deleteUser">
        회원탈퇴
      </button>
      <router-link to="/modify" class="btn btn-success rounded-3 text-white px-4">
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
