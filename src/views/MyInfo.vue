<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { deleteArticle } from '../api/board.js';
import { storeToRefs } from 'pinia';
import { useMemberStore } from '@/stores/member';

const { userInfo } = storeToRefs(useMemberStore());
const route = useRoute();
const router = useRouter();
console.log(route.params);
const boardId = route.params.boardId;
const isYou = ref(false);
const imgurl = ref('');

const article = ref({});
const liked = ref(false);

onMounted(() => {
    getdetaillist();
});

const getmydata = async () => {
    console.log(article);
    console.log(article.value);

    console.log(article.value.userId);

    try {
        const response = await axios.get('http://localhost:80/user/getinfo', {
            params: {
                userId: article.value.userId,
            },
        });

        // userName.value = response.data.userName;
        // address.value = response.data.address;
        console.log(' ' + response.data);

        console.log('getttt' + response.data.imgurl);
        imgurl.value = response.data.imgurl;
        // console.log("getttt" + response.data.userId);
        // console.log("getttt" + response.data.userName);
        // console.log("getttt" + response.data.address);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const checkIsYou = (thisid) => {
    if (userInfo.value.userId === thisid) {
        isYou.value = true;
    }
};

console.log('boardId:', boardId);

const getdetaillist = async () => {
    try {
        const response = await axios.get('http://localhost:80/article/view?articleno=' + boardId);
        console.log(response.data);
        article.value = response.data;
        liked.value = response.data.likedByUser;
        checkIsYou(article.value.userId);
        // writer.value = article.value.userId;
        getmydata();
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

const toggleLike = async () => {
    console.log('likkk');
    const newLikeStatus = !liked.value; // 미리 상태를 변경하지 않고, 요청을 보낸 후 성공적인 응답을 받았을 때 상태를 변경

    try {
        const response = await axios.post('http://localhost:80/article/likes', {
            articleNo: article.value.articleNo,
        });

        console.log(response.data);
        console.log(article);
        // 응답으로 받은 좋아요 수와 상태를 업데이트합니다.
        // if (response.data.success) {
        article.value.likes = response.data;
        console.log('arrrrr' + article.value.likes);
        liked.value = newLikeStatus; // 서버의 응답을 바탕으로 상태를 업데이트
        // }
    } catch (error) {
        console.error(error);
        // 여기서 사용자에게 에러가 발생했다는 것을 알리는 UI 피드백을 제공할 수 있음
    }
};

const AddComment = () => {
    console.log('article.value.articleNo', article.value.articleNo);
    // deleteArticle(
    //   article.value.articleNo,
    //   ({ data }) => {
    //     console.log("ssss" + data);
    //     alert("삭제되었습니다.");
    //     router.push("/board");
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
};

const deleteThisArticle = () => {
    console.log('article.value.articleNo', article.value.articleNo);
    deleteArticle(
        article.value.articleNo,
        ({ data }) => {
            console.log('ssss' + data);
            alert('.');
            router.ush('/board');
        },
        (err) => {
            console.log(err);
        }
    );
};
</script>

<template>
    <div class="container bg-info d-flex align-items-center flex-column py-4 rounded-4 mt-5">
        <h1>공지사항</h1>

        <img id="first_snow" src="src/assets/첫눈맞이등산.png" class="img-fluid rounded mx-auto d-block" alt="..." />
        <img id="first_snow" src="src/assets/겨울산행전대비.png" class="img-fluid rounded mx-auto d-block" alt="..." />
    </div>

    <!-- Input for New Comment -->
</template>

<style scoped>
.btn-like-active {
    color: green; /* 좋아요가 활성화된 상태일 때의 색깔 */
}
</style>
