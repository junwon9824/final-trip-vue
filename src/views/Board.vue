<script setup>
import { ref } from 'vue';
import BoardCard from '../components/board/item/BoardCard.vue';
const saveId = ref(false);
const handleIdSaveClick = () => {
  console.log('아이디 저장 clicked');
};

const handlePasswordRecoveryClick = () => {
  console.log('비밀번호 찾기 clicked');
};

const items = [
  {
    board_id: 1,
    articleNo: 20,
    subject: 'Your Subject',
    content: 'Your Content',
    userId: 'Your UserID',
    registerTime: '2023-11-10 12:34:56',
  },

  // Add more items as needed
];
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-12 mb-3 d-flex align-items-end justify-content-center">
          <h1 class="mb-2 me-3 col-md-6 text-center">우리들의 등산 이야기</h1>
          <router-link to="/boardwrite" class="d-flex flex-row align-items-center nav-link">
            <button type="button" class="btn btn-primary col-md-12 ms-2 mb-0">글쓰기</button>
          </router-link>
        </div>

        <div>
          <BoardCard v-for="item in items" :key="item.articleNo" :board="item"></BoardCard>
        </div>
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
  margin-top: 20px; /* Adjust the value as needed */
}
</style>
