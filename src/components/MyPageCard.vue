<script setup>
import { defineProps, ref } from "vue";

const props = defineProps([
  "userId",
  "userName",
  "address",
  "conqueredMountains",
]);

const isEditing = ref(false);

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const deleteUser = () => {
  // 탈퇴 로직 구현
};
 
// 기타 필요한 로직 추가
</script>

<template>
  <div
    class="card bg-info text-dark rounded-pill d-flex justify-content-around"
  >
    <div class="card-body flex-shrink-0 d-flex">
      <div class="flex-shrink-0">
        <button class="btn btn-primary rounded-pill text-white" @click="deleteUser">회원탈퇴</button>
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

      <div class="  ">
        <button class="btn  "  >
          <router-link to="/" class="btn btn-primary rounded-pill text-white" >
            수정
          </router-link>
        </button>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
