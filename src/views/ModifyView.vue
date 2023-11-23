<template>
  <div class="container">
    <p class="fs-2 fw-bold text-center">회원 정보 수정</p>

    <div class="card bg-info d-flex align-items-center rounded-4">
      <div class="card-body col-11">
        <div>
          <input
            type="file"
            @change="handleImageChange"
            class="form-control form-control-lg mt-5"
            accept="image/*"
          />

          <!-- <img :src="editedFileInfo" class="img-fluid rounded d-block" /> -->
        </div>

        <input
          type="text"
          class="form-control py-3 my-5"
          placeholder="이름 Name"
          v-model="userNamev"
        />
        <input
          type="text"
          class="form-control py-3 my-5"
          placeholder="비밀번호"
          v-model="userPwdv"
        />
        <input type="text" class="form-control py-3 my-5" placeholder="비밀번호확인" />
        <input type="text" class="form-control py-3 my-5" placeholder="주소" v-model="addressv" />
        <div class="d-flex justify-content-end mb-3">
          <button @click="modify" class="btn btn-secondary btn-lg rounded-pill">
            수정<i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPageCard from '../components/Mypage/MyPageCard.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useMemberStore } from '@/stores/member';

const { userInfo } = storeToRefs(useMemberStore());
const router = useRouter();
const yourFileVariableHere = ref(null); // 파일 변수를 추가해야 합니다.
const editedFileInfo = ref('');

const handleImageChange = (event) => {
  const selectedFile = event.target.files[0];
  editedFileInfo.value = URL.createObjectURL(selectedFile);
  yourFileVariableHere.value = selectedFile; // 파일 변수에 선택한 파일을 할당합니다.
  console.log('chaaaaaaaaaaaaaa' + yourFileVariableHere.value);
};

const userIdv = userInfo.value.userId;
const userPwdv = ref('');
const userNamev = ref('');
const addressv = ref('');

const modify = async () => {
  try {
    console.log('useridddd' + userIdv);
    console.log('useridddd' + userPwdv);
    console.log('useridddd' + userNamev);

    let formData = new FormData();
    formData.append('userPwd', userPwdv.value);
    formData.append('userName', userNamev.value);
    formData.append('address', addressv.value);
    formData.append('userId', userIdv);
    formData.append('imgfile', yourFileVariableHere.value);
    console.log('iiiiiiiiiiii' + yourFileVariableHere.value);
    const response = await axios.put('http://localhost:80/user/modify', formData, {
      // userPwd: userPwdv.value,
      // userName: userNamev.value,
      // address: addressv.value,
      // userId: userIdv,
      headers: {
        'Content-Type': 'multipart/form-data', // 헤더의 오타 수정
      },
    });

    //   console.log("getttt" + response.data.userId);
    //   console.log("getttt" + response.data.userName);
    //   console.log("getttt" + response.data.address);
    router.push('/mypage');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
</script>

<style scoped>
/* Your existing styles */
</style>
