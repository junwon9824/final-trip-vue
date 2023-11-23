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
const articlecomments = ref([]);

const liked = ref(false);

const commentbox = ref({
    userId: '',
    content: '',
    articleNo: '',
});

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

const getcommentlist = async () => {
    console.log(article);
    console.log(article.value.articleNo);

    console.log(article.value.userId);
    try {
        const response = await axios.get('http://localhost:80/comments/allcomments', {
            params: {
                articleNo: boardId,
            },
        });
        const commentsArray = response.data;

        // 각 댓글에 대한 처리
        commentsArray.forEach((comment) => {
            console.log('Comment ID:', comment.idcomments);
            console.log('Content:', comment.content);
            // 각 댓글의 속성에 접근하여 원하는 처리를 할 수 있습니다.
        });

        console.log(boardId);
        articlecomments.value = response.data;
        // userName.value = response.data.userName;
        // address.value = response.data.address;
        console.log(' ' + response.data);
        console.log(' ' + response.data.idcomments);

        // console.log("getttt" + response.data.imgurl);
        // imgurl.value = response.data.imgurl;
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
        getcommentlist();
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
    // console.log("article.value.articleNo", article.value.articleNo);

    commentbox.value.userId = userInfo.value.userId;
    commentbox.value.articleNo = boardId;
    commentbox.value.content = comment.value;
    commentbox.value.articleNo = boardId;

    writeComments(
        commentbox.value,
        ({ data }) => {
            console.log('ssss' + data);
            alert('댓글이 작성되었습니다.');
            // router.push("/board");
        },
        (err) => {
            console.log(err);
        }
    );
    console.log('bbbb' + boardId);
    console.log('add comment' + commentbox.value.content);
    console.log('add comment' + commentbox.value.articleNo);
    getdetaillist();
};

// const final = () => {
//   join(
//     userinfo.value,
//     ({ data }) => {
//       if (data == "Member registered successfully") {
//         alert("회원가입이 완료되었습니다.");
//         location.href = "/login";
//       } else {
//         alert("회원가입에 실패하였습니다.");
//         return;
//       }
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// };

const deleteThisArticle = () => {
    console.log('article.value.articleNo', article.value.articleNo);
    deleteArticle(
        article.value.articleNo,
        ({ data }) => {
            console.log('ssss' + data);
            alert('.');
            router.push('/board');
        },
        (err) => {
            console.log(err);
        }
    );
};
</script>

<template>
    <div class="container bg-info d-flex align-items-center flex-column py-4 rounded-4 mt-5">
        <div class="col-10 d-flex flex-row justify-content-between">
            <div class="d-flex flex-row align-items-center">
                <!-- 이미지props로 받기 -->
                <img
                    :src="imgurl"
                    class="img-fluid rounded-circle d-block"
                    alt="."
                    style="width: 100px; height: 100px; object-fit: fill"
                />

                <div class="ps-3 pt-4">
                    <!-- 이름 게시일 props로 받기 -->
                    <p class="text-center mb-1 fw-bold fs-5">{{ article.userName }}</p>
                    <p class="text-center fw-light fs-7">{{ article.registerTime }}</p>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button :class="{ 'btn-like-active': liked }" class="btn btn-light" type="button" @click="toggleLike">
                    <i class="bi bi-hand-thumbs-up"></i>{{ article.likes }}
                </button>
            </div>
        </div>
        <div class="col-10 mt-4">
            <p class="fs-4 fb-bold mx-3">{{ article.subjects }}</p>
        </div>
        <div class="col-10 mt-4 mb-4">
            <p class="fs-6 mx-3">
                {{ article.content }}
            </p>
        </div>
        <button v-if="isYou" class="btn bg-secondary fs-6 fw-bold text-white" type="button" @click="deleteThisArticle">
            삭제
        </button>
        <!-- Comment Section -->
    </div>

    <div class="container bg-info d-flex align-items-center flex-column py-4 rounded-4 mt-5" id="commentlist">
        <h5>댓글 목록</h5>
        <ul>
            <li v-for="(comment, index) in articlecomments" :key="index">
                {{ comment.userId }} - {{ comment.content }}
            </li>
        </ul>
    </div>
    <div class="container d-flex align-items-center py-4 rounded-4 mt-5">
        <input placeholder="댓글.." id="comment" v-model="comment" class="ms-5" />
        <button class="btn bg-secondary fs-6 fw-bold text-white ms-3" type="button" @click="AddComment" id="commentbtn">
            댓글달기
        </button>
    </div>
    <!-- Input for New Comment -->
</template>

<style scoped>
.btn-like-active {
    color: green; /* 좋아요가 활성화된 상태일 때의 색깔 */
}
#comment {
    width: 80%;
    height: 100px; /* Increase the height as needed */
    resize: vertical; /* Allow vertical resizing */
}

#commentbtn {
    height: 100px; /* Increase the height as needed */
    resize: vertical; /* Allow vertical resizing */
}
#commentlist {
    background-color: rgba(12, 87, 53, 0.67);
}
</style>
