<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const saveId = ref(false);
const id = ref('');
const password = ref('');
const router = useRouter(); // 라우터 객체 한 번만 선언

const handleIdSaveClick = () => {
  console.log('아이디 저장 clicked');
};

const handlePasswordRecoveryClick = () => {
  console.log('비밀번호 찾기 clicked');
};

const login = async () => {
  console.log('로그인 clicked' + " " + id.value);

  try {
    console.log('in try' + " " + password.value);

    const payload = {
      userId: id.value,
      userPwd: password.value
    };

    const response = await axios.post('http://localhost:80/user/login', payload);
    console.log("login response:", response.data); // 반환된 데이터 확인

    // 여기서 반환된 데이터를 사용하여 필요한 작업 수행

    router.push('/'); // 메인 페이지로 이동

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
</script>


<template>
  <div class="container bg-light rounded-3 p-0 ">
    <div class="row">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="col-8 d-flex flex-column justify-content-around" style="height: 80%;">
          <p class="fs-4 fw-bold">로그인</p>
          <p>가입하신 이메일 주소로 로그인하세요.</p>
          <div class="mb-3">
            <label for="userId" class="form-label fw-bold">아이디</label>
            <input type="text" class="form-control py-2" id="userId" placeholder="아이디를 입력하세요" v-model="id" />
          </div>

          <div class="mb-3">
            <label for="userPassword" class="form-label fw-bold ">비밀번호</label>
            <input type="password" class="form-control py-2" id="userPassword" placeholder="비밀번호를 입력하세요" v-model="password" />
          </div>

          <div class="mb-3 d-flex">

            <div class="form-check me-2">
              <input type="checkbox" id="saveIdCheckbox" v-model="saveId" />
              <label for="saveIdCheckbox">아이디 저장</label>
            </div>

            <a href="#" @click="handlePasswordRecoveryClick" class="form-label d-inline">비밀번호 찾기</a>
          </div>


          <div class="d-flex justify-content-center">

            <button type="button" class="btn btn-success col-6 mx-1 text-white fw-bold" @click="login()">로그인</button>

            <button type="button" class="btn btn-outline-success col-6 mx-1 fw-bold"><router-link
                style="text-decoration: none;" to="/register">회원가입</router-link></button>
          </div>

        </div>

      </div>

      <div class="col-7">
        <img src="@/assets/mountain_car.png" class="img-fluid rounded-end d-block" alt="..." />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100%;
  width: 100%;
  text-align: left;
}

button {
  margin-left: 10px;
}

.d-flex {
  margin-top: 10px;
  /* Adjust margin as needed */
}

.flex-grow-1 {
  flex-grow: 1;
}

.container {
  margin-top: 20px;
  /* Adjust the value as needed */
}
</style>
