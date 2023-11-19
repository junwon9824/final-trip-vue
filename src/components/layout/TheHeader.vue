<script setup>
import { ref, watchEffect, watch, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = computed(() => {
  console.log("session changed");
  return sessionStorage.getItem("userId") !== null;
});

// const checkSession = () => {
//   console.log("check")
//   const currentValue = sessionStorage.getItem('userId') !== null;
//   if (currentValue !== isLoggedIn.value) {
//     isLoggedIn.value = currentValue; // 상태 업데이트
//   }
// };

// // 1초마다 checkSession 함수 실행
// setInterval(checkSession, 1000); // 1초마다 실행됨 (1000ms = 1초)

watch(isLoggedIn, (newValue, oldValue) => {
  isLoggedIn.value = newValue.value;
  console.log(
    ("islogggggggggggggggg,new" + isLoggedIn.value + " ") | newValue.value
  );
  // 여기서 원하는 동작 수행
});

console.log("iiii" + isLoggedIn.value);
console.log("iiii" + sessionStorage.getItem("userId"));

const logout = () => {
  sessionStorage.clear(); // 세션 스토리지의 데이터 모두 제거
  router.push("/login");
};

const goToMyPage = () => {
  const isLoggedIn = sessionStorage.getItem("userId") !== null;

  if (!isLoggedIn) {
    // 비로그인 상태일 때 로그인 창 보여주기
    alert("로그인이 필요합니다.");
    router.push("/login");
  } else {
    // 로그인 상태일 때 마이페이지로 이동
    router.push("/mypage");
  }
};

const goToPlan= () => {
  const isLoggedIn = sessionStorage.getItem("userId") !== null;

  if (!isLoggedIn) {
    // 비로그인 상태일 때 로그인 창 보여주기
    alert("로그인이 필요합니다.");
    router.push("/login");
  } else {
    // 로그인 상태일 때 마이페이지로 이동
    router.push("/plan");
  }
};

const goToBoard= () => {
  const isLoggedIn = sessionStorage.getItem("userId") !== null;

  if (!isLoggedIn) {
    // 비로그인 상태일 때 로그인 창 보여주기
    alert("로그인이 필요합니다.");
    router.push("/login");
  } else {
    // 로그인 상태일 때 마이페이지로 이동
    router.push("/board");
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-light mt-1 mb-1 py-0">
    <div class="container-lg my-0 py-0">
      <div class="d-flex flex-row">
        <router-link to="/" class="d-flex flex-row align-items-center nav-link">
          <a class="navbar-brand nav-link" href="javascript:void(0)">
            <img
              src="@/assets/mtnlogo.png"
              class="rounded mx-auto d-block"
              alt="..."
            />
          </a>
          <p class="text-muted fs-2 mt-4 fw-bold">산들바람</p>
        </router-link>
      </div>
      <div class="col-7 d-flex flex-row justify-content-between">
        <div>
          <ul class="navbar-nav me-auto">
            <!-- <li class="nav-item">
                    <router-link to="/conqueredmountain" class="nav-link">
                      <h5 class="text-primary">정복한 산</h5>
                    </router-link>
              
                  </li> -->

            <li class="nav-item">
              <router-link to="/search" class="nav-link">
                <p class="text-primary fs-4 fw-bold me-3">검색</p>
              </router-link>
            </li>

            <!-- <router-link to="/board" class="nav-link"> -->
              <p id="board" @click="goToBoard" class="text-primary fs-4 fw-bold mt-2 me-3">게시판</p>
            <!-- </router-link> -->

            <!-- <router-link to="/plan" class="nav-link"> -->
              <p @click="goToPlan" class="text-primary fs-4 fw-bold mt-2 me-3">계획</p>
            <!-- </router-link> -->

            <p @click="goToMyPage" class="text-primary fs-4 fw-bold mt-2 me-3">
              마이페이지
            </p>
            
          </ul>
        </div>

        <div v-if="!isLoggedIn" class="d-flex flex-row align-items-center">
          <router-link to="/login" class="px-1">
            <button
              type="button"
              class="btn btn-primary rounded-pill text-white fw-bold fs-5"
            >
              로그인
            </button>
          </router-link>

          <router-link to="/register" class="px-1">
            <button
              type="button"
              class="btn btn-primary rounded-pill text-white fw-bold fs-5"
            >
              회원가입
            </button>
          </router-link>
        </div>

        <div v-else>
          <button
            type="button"
            class="btn btn-primary rounded-pill text-white fw-bold fs-5"
            @click="logout"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
img {
  height: 111px;
  text-align: left;
}

 
</style>
