<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-light mt-0 p-0">
    <div class="container-lg my-0 py-0">
      <div class="d-flex flex-row">
        <router-link to="/" class="d-flex flex-row align-items-center nav-link">
          <a class="navbar-brand nav-link" href="javascript:void(0)">
            <img
              src="@/assets/—Pngtree—vector mountains icon_4154096.png"
              class="rounded mx-auto d-block"
              alt="..."
            />
          </a>
          <h3 class="text-muted"><strong>산들바람</strong></h3>
        </router-link>
      </div>
      <div class="col-7 d-flex flex-row justify-content-between">
        <div>
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/conqueredmountain" class="nav-link">
                <h5 class="text-primary">정복한 산</h5>
              </router-link>
              
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">
                <h5 class="text-primary">검색</h5>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/board" class="nav-link">
                <h5 class="text-primary">게시판</h5>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/board" class="nav-link">
                <h5 class="text-primary">계획</h5>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/board" class="nav-link">
                <h5 class="text-primary">마이페이지</h5>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex flex-row align-items-center">
          <router-link to="/login" class="px-1">
            <button type="button" class="btn btn-primary rounded-pill text-white">로그인</button>
          </router-link>

          <router-link to="/regist" class="px-1">
            <button type="button" class="btn btn-primary rounded-pill text-white">회원가입</button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

img{
    height: 111px;
    text-align: left;
}


</style>
