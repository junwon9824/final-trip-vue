<script setup></script>

<template>
  <div class="container bg-info d-flex align-items-center flex-column py-4 rounded-4">
    <div class="col-10 d-flex flex-row justify-content-between">
      <div class="d-flex flex-row align-items-center">
        <!-- 이미지props로 받기 -->
        <img
          src="../assets/prfile_temp_1.png"
          class="img-fluid rounded-circle d-block"
          alt="..."
          style="width: 100px; height: 100px; object-fit: fill"
        />
        <div class="ps-3 pt-4">
          <!-- 이름 게시일 props로 받기 -->
          <p class="text-center mb-1 fw-bold fs-5">name</p>
          <p class="text-center fw-light fs-7">date</p>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center">
        <!-- 좋아요 수 -->
        <button class="btn btn-light" type="submit">
          <i class="bi bi-hand-thumbs-up"></i> number
        </button>
      </div>
    </div>
    <div class="col-10 mt-4">
      <p class="fs-4 fb-bold mx-3">subject</p>
    </div>
    <div class="col-10 mt-4 mb-4">
      <p class="fs-6 mx-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus officiis quaerat odio
        corrupti distinctio veniam commodi harum laboriosam earum illum, quis veritatis molestiae
        laborum! Nihil saepe eum dolorum adipisci maxime!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
