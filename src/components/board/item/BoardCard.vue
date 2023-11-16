<script setup>

import { defineProps, onMounted } from 'vue';

const props = defineProps({ board: Object });

//boardcard 에 특정 게시판의 정보를 준다.. 따라서 해당 게시판에 해당하는 많은 파일들중 하나를 추출하는 작업 필요..

function getfiles() {

  const response = await axios.get('http://localhost:80/mountain/search', {
    params: {
      word: editedMountainName.value,
    },
  });

}

onMounted(() => {
  console.log(props.board.articleNo);


})




</script>
<template>
  <tr>
    <td class="pt-3 pb-3 d-flex flex-row">
      <div>
        <img src="@/assets/mountain_car.png" class="img-fluid rounded mx-4 d-block" alt="..."
          style="width: 350px; height: 190px; object-fit: fill" />
      </div>

      <div class="card-body d-flex flex-column">
        <p class="card-title fw-bold fs-3">{{ board.subject }}</p>
        <p class="card-text pb-3 fs-5">{{ board.content }}</p>
        <p class="mt-5">{{ board.registerTime }}</p>
      </div>
    </td>
  </tr>
</template>

<style scoped></style>
