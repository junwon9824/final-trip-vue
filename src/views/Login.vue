<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useMemberStore } from '@/stores/member';
import { useCookies } from 'vue3-cookies';
import { useMenuStore } from '@/stores/menu';

const { cookies } = useCookies();

const memberStore = useMemberStore();

const { isLogin } = storeToRefs(memberStore);
const { userLogin, getUserInfo } = memberStore;
const { changeMenuState } = useMenuStore();

const saveId = ref(false);
const id = ref('');
const password = ref('');
const router = useRouter(); // 라우터 객체 한 번만 선언

onMounted(() => {
  id.value = cookies.get('userId');
  if (id.value) {
    saveId.value = true;
  }
});

const loginUser = async () => {
  await userLogin({ userId: id.value, userPwd: password.value });
  let token = sessionStorage.getItem('accessToken');
  if (isLogin) {
    getUserInfo(token);
    changeMenuState();
    if (saveId.value) {
      cookies.set('userId', id.value);
    } else {
      cookies.remove('userId');
    }
  }
  router.push('/');
};
</script>

<template>
  <div class="container bg-light rounded-3 p-0 mt-5">
    <div class="d-flex flex-row">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="col-9 d-flex flex-column justify-content-around" style="height: 80%">
          <div class="d-flex flex-row align-items-end">
            <img
              src="@/assets/mtnlogo.png"
              alt="logo"
              class="me-3"
              style="height: 80px; width: 80px"
            />
            <p class="text-secondary fs-4 fw-bold">산들바람</p>
          </div>
          <p class="fs-4 fw-bold">로그인</p>

          <div class="mb-3">
            <label for="userId" class="form-label fw-bold">아이디</label>
            <input
              type="text"
              class="form-control py-2"
              id="userId"
              placeholder="아이디를 입력하세요"
              v-model="id"
            />
          </div>

          <div class="mb-3">
            <label for="userPassword" class="form-label fw-bold">비밀번호</label>
            <input
              type="password"
              class="form-control py-2"
              id="userPassword"
              placeholder="비밀번호를 입력하세요"
              v-model="password"
            />
          </div>

          <div class="mb-3 d-flex">
            <div class="form-check ms-0 ps-0 me-4">
              <input type="checkbox" id="saveIdCheckbox" v-model="saveId" />
              <label for="saveIdCheckbox">아이디 저장</label>
            </div>

            <a href="#" @click="handlePasswordRecoveryClick" class="form-label d-inline"
              >비밀번호 찾기</a
            >
          </div>

          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-success col-6 py-2 mx-1 fw-bold text-white"
              @click="loginUser"
            >
              로그인
            </button>

            <button type="button" class="btn btn-outline-success col-6 py-2 mx-1 fw-bold">
              <router-link to="/register">회원가입</router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <img
          src="@/assets/mountain_car.png"
          class="img-fluid rounded-end mx-auto d-block"
          alt="..."
        />
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
</style>
