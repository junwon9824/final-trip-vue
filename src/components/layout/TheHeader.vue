<script setup></script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-light mt-0 p-0">
    <div class="container-lg my-0 py-0">
      <div class="d-flex flex-row">
        <router-link to="/" class="d-flex flex-row align-items-center nav-link">
          <a class="navbar-brand nav-link" href="javascript:void(0)">
            <img src="@/assets/mtnlogo.png" class="rounded mx-auto d-block" alt="..." />
          </a>
          <p class="text-muted fs-2 fw-bold">산들바람</p>
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
                <p class="text-primary fs-4 fw-bold">검색</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/board" class="nav-link">
                <p class="text-primary fs-4 fw-bold">게시판</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plan" class="nav-link">
                <p class="text-primary fs-4 fw-bold">계획</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mypage" class="nav-link">
                <p class="text-primary fs-4 fw-bold">마이페이지</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex flex-row align-items-center">
          <router-link to="/login" class="px-1">
            <button type="button" class="btn btn-primary rounded-pill text-white fw-bold fs-5">
              로그인
            </button>
          </router-link>

          <router-link to="/regist" class="px-1">
            <button type="button" class="btn btn-primary rounded-pill text-white fw-bold fs-5">
              회원가입
            </button>
          </router-link>
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
