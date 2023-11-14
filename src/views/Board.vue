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
  {
    board_id: 2,
    articleNo: 22,
    subject: 'Your Subject',
    content: 'Your Content',
    userId: 'Your UserID',
    registerTime: '2023-11-10 12:34:56',
  },

  // Add more items as needed
];
</script>

<template>
  <div class="container col-12 mt-5 d-flex flex-column align-items-center justify-content-center">
    <div class="d-flex col-12 flex-row justify-content-end align-items-center bg-warning">
      <p class="text-center fw-bold fs-2">우리들의 등산 이야기</p>

      <router-link
        to="/boardwrite"
        class="d-flex flex-row align-items-center nav-link col-4 justify-content-end"
      >
        <button type="button" class="btn btn-secondary rounded-pill">
          글쓰기 <i class="bi bi-arrow-right"></i>
        </button>
      </router-link>
    </div>
    <table class="table table-hover border-primary">
      <tbody>
        <tr>
          <td></td>
        </tr>
        <BoardCard v-for="item in items" :key="item.articleNo" :board="item"></BoardCard>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
