<script setup>
import { ref, onMounted } from 'vue';
import BoardCard from '../components/board/item/BoardCard.vue';
import axios from 'axios';

import { useRouter } from 'vue-router';

const saveId = ref(false);

const items = ref([]);
const router = useRouter();

const getboardlist = async () => {
  try {
    const response = await axios.get('http://localhost:80/article/alllist', {
      // params: {
      //   word: editedMountainName.value,
      // }
    });

    items.value = response.data;
    console.log('item' + items.value);
    console.log('item ' + items.value[6].subjects);
    console.log('item ' + items.value[6].save_file);
    // console.log(it)
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

onMounted(getboardlist);

function getBoardDetail(boardId) {
  // console.log ("hi");
  console.log('boardId' + boardId);
  router.push({ name: 'boardview', params: { boardId: boardId } });
}
</script>

<template>
  <div class="container col-12 mt-5 d-flex flex-column align-items-center justify-content-center">
    <div class="d-flex col-12 flex-row justify-content-start align-items-center bg-warning">
      <p class="text-center fw-bold fs-2 col-11">우리들의 등산 이야기</p>

      <router-link
        to="/boardwriteCard"
        class="d-flex flex-row align-items-center nav-link justify-content-end"
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
        <BoardCard
          @click="getBoardDetail(item.articleNo)"
          v-for="item in items"
          :key="item.articleNo"
          :board="item"
        ></BoardCard>
      </tbody>
    </table>
  </div>
</template>
<style scope></style>
