<script setup>
import { ref } from 'vue';
import BoardCard from '../components/board/item/BoardCard.vue';
import BoardWrite from '../components/boardwrite/BoardWrite.vue';
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

const getboardlist = async () => {
    try {
        const response = await axios.get('http://localhost:80/mountain/', {
            params: {
                word: editedMountainName.value,
            },
        });
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 mb-3 d-flex align-items-end justify-content-center">
                    <p class="text-center fw-bold fs-2 col-11">나의 등반기</p>
                </div>
                <BoardWrite></BoardWrite>
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
    margin-top: 20px;
    /* Adjust the value as needed */
}
</style>
