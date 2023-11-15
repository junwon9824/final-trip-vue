<script setup>
import { ref } from 'vue';
const saveId = ref(false);

const handleIdSaveClick = () => {
  console.log('아이디 저장 clicked');
};

const handlePasswordRecoveryClick = () => {
  console.log('비밀번호 찾기 clicked');
};
</script>

<template>
  <div class="container d-flex flex-row rounded-3 bg-light px-0">
    <div class="col-6 ">
      <div>
        <h1>로그인</h1>
        <p>가입하신 이메일 주소로 로그인하세요.</p>
        <div class="m-0">
          <label for="userId" class="form-label">아이디</label>
          <input type="text" class="form-control" id="userId" placeholder="아이디를 입력하세요" />
        </div>

        <div class="mb-3">
          <label for="userPassword" class="form-label">비밀번호</label>
          <input
            type="password"
            class="form-control"
            id="userPassword"
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" id="saveIdCheckbox" v-model="saveId" />
            <label for="saveIdCheckbox">아이디 저장</label>
          </div>

          <a href="#" @click="handlePasswordRecoveryClick" class="form-label d-inline"
            >비밀번호 찾기</a
          >
        </div>
      </div>

      <div class="d-flex">
        <button type="button" class="btn btn-success flex-grow-1">로그인</button>
        <button type="button" class="btn btn-success flex-grow-1">회원가입</button>
      </div>
    </div>

    <div class="col-6">
      <img src="@/assets/mountain_car.png" class="img-fluid rounded-end mx-0" alt="..." />
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
  margin-top: 10px; /* Adjust margin as needed */
}

.flex-grow-1 {
  flex-grow: 1;
}
.container {
  margin-top: 20px; /* Adjust the value as needed */
}
</style>
