<script setup>
import { ref } from "vue";
import BoardSearchItem from "../components/board/BoardSearchItem.vue";

// import { getSearchResult } from "../api/mountain.js";

const editedMountainName = ref("");
const searchResult = ref([]);

const searchMountain = async () => {
  // try {
  //   const response = await getSearchResult(editedMountainName.value);
  //   searchResult.value = response.data;
  // } 
  // catch (error) {
  //   console.error("Error searching for mountains:", error);
  // }

  console.log("검색");
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

          <button
            @click="searchMountain"
            class="btn btn-primary btn-lg py-2 px-5 m-0 fw-bold"
          >
            Search
          </button>
        </div>

        <!-- Display search results -->
        <BoardSearchItem :searchResult="searchResult"></BoardSearchItem>

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
