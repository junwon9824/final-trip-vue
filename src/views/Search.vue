<script setup>
import { ref } from 'vue';
import BoardSearchItem from '@/components/board/BoardSearchItem.vue';

const editedMountainName = ref('');

const searchMountain = () => {
  // Implement the logic for searching
  console.log('Searching for:', editedMountainName.value);
  console.log(editedMountainName);
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="card-body d-flex align-items-center justify-content-center">
          <div class="input-group" style="width: 720px">
            <span class="input-group-text"><i class="bi bi-search"></i></span>
            <input
              v-model="editedMountainName"
              type="text"
              class="form-control fs-4 m-0 py-1"
              placeholder=" 이름 검색  "
            />
          </div>

          <button @click="searchMountain" class="btn btn-primary btn-lg py-2 px-5 m-0 fw-bold">
            Search
          </button>
        </div>
        <BoardSearchItem></BoardSearchItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  margin-top: 10px;
}
.container {
  margin-top: 12%;
}
</style>
