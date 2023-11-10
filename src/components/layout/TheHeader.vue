<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">

    <router-link to="/">
    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
  </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/conqueredmountain">
          <a class="nav-link" href="javascript:void(0)">정복한 산</a>
          </router-link>

        </li>
        <li class="nav-item">
          <router-link to="/search">
            <a class="nav-link" href="javascript:void(0)">검색</a>
          </router-link>

        </li>
        <li class="nav-item">
          <router-link to="/board">
          <a class="nav-link" href="javascript:void(0)">게시판</a>
          </router-link>

        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search">
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
</style>
