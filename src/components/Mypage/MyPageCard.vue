<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const props = defineProps(['userId', 'userName', 'address', 'conqueredMountains']);

const router = useRouter();

const userIdvalue = sessionStorage.getItem('userId');
const userName = ref('');
const address = ref('');
const conquerednum = ref('');
const num =ref('');

const getmydata = async () => {

  try {

    const response = await axios.get('http://localhost:80/user/getinfo', {
      params: {
        userId: userIdvalue,
      },
    });

    userName.value = response.data.userName;
    address.value = response.data.address;

    console.log("getttt" + response.data.userId);
    console.log("getttt" + response.data.userName);
    console.log("getttt" + response.data.address);

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

onMounted(getmydata);


const gettotalconquerednum = async () => {

try {

  const response = await axios.get('http://localhost:80/user/gettotalconquered', {
    params: {
      userId: userIdvalue,
    },
  });
 
  console.log("getttt" + response.data.userId); 
  num = response.data
} catch (error) {
  console.log(error);
  throw new Error(error);
}
};

onMounted(gettotalconquerednum);


const deleteUser = async () => {

  try {
    console.log(editedMountainName.value);
    const response = await axios.delete('http://localhost:80/user/delete', {
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
  router.push('/login');

};


// 기타 필요한 로직 추가
</script>

<template>
  <div class="card bg-info text-dark rounded-4 d-flex justify-content-center align-items-center py-5 mt-5">
    <div class="d-flex justify-content-center align-items-center">
      <img src="@/assets/mountain_car.png" class="img-fluid rounded-circle mx-auto d-block" alt="..."
        style="width: 200px" />
      <div class="flex-grow-1 ms-5">
        <p class="fs-4">ID: {{ userIdvalue }}</p>
        <p class="fs-4">이름: {{ userName }}</p>
        <p class="fs-4">주소: {{ address }}</p>
        <p class="fs-4">정복 수: {{   }}</p>
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
