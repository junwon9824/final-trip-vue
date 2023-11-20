<script setup>
import { defineProps, onMounted, ref } from "vue";
import axios from "axios";
const props = defineProps({ board: Object });

//boardcard 에 특정 게시판의 정보를 준다.. 따라서 해당 게시판에 해당하는 많은 파일들중 하나를 추출하는 작업 필요..
const files = ref([]);

 
const getfiles = async () => {
  console.log("pppppppppppp" + props.board.articleNo);
  const response = await axios.get(
    "http://localhost:80/article/getboardfiles",
    {
      params: {
        articleNo: props.board.articleNo,
      },
    }
  );
 
  files.value = response.data;
  console.log("ffffff" + files.value);
};

onMounted(() => {
  console.log(props.board.content);
  getfiles();
});
</script>

<template>
   <div class="board-card">
    <img
      src="@/assets/mountain_car.png"
      class="board-image"
      alt="Board image"
    />
    <div class="board-text">
      <h2 class="board-title">{{ board.subjects }}</h2>
      <p class="board-content">{{ board.content }}</p>
      <p class="board-time">{{ board.registerTime }}</p>
    </div>
  </div> 
</template>



<style scoped>
/* 전체 카드 스타일링 */
.board-card {
  display: flex;
  flex-direction: row; /* 가로 방향으로 요소들을 정렬 */
  flex: 1; /* 사용 가능한 전체 공간을 차지하도록 함 */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-bottom: 24px;
  transition: background-color 0.3s; /* 배경색 변경에 대한 부드러운 전환 효과 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
}

/* 이미지 스타일링 */
.board-image {
  flex-shrink: 0; /* 이미지 크기가 축소되지 않도록 함 */
  width: 340px; /* 이미지 너비 고정 */
  height: 260px; /* 이미지 높이 고정 */
  border-radius: 10px 0 0 10px;
  object-fit: cover;
}

/* 텍스트 컨테이너 스타일링 */
.board-text {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1; /* 텍스트 영역이 남은 공간을 모두 사용하도록 함 */
}

/* 제목 스타일링 */
.board-title {
  font-size: 1.8rem;
  color: #333;
  margin: 20px 0 12px 10px;
}

/* 내용 스타일링 */
.board-content {
  font-size: 1rem;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 600px;
}

/* 날짜 스타일링 */
.board-time {
  font-size: 0.875rem;
  color: #777;
  align-self: flex-end;
}

.board-text:hover {
  background-color: #f0f0f0; /* 호버 시 배경색 변경 */
}
</style>
