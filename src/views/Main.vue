<script setup>
import MainCard from '../components/Main/MainCard.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([
    {
        mntiname: '무등산',
        mntilistno: '431502001',
        mntiimg: 'src/assets/mumountain.png',
    },
    {
        mntiname: '민둥산',
        mntilistno: '418201701',
        mntiimg: 'src/assets/minmountain.jpeg',
    },
    {
        mntiname: '방태산',
        mntilistno: '428102201',
        mntiimg: 'src/assets/bangmountain.jpeg',
    },
]);
const items2 = ref([
    {
        mntiname: '단석산',
        mntilistno: '471301101',
        mntiimg: 'src/assets/danmountain.jpeg',
    },
    {
        mntiname: '계방산',
        mntilistno: '427206801',
        mntiimg: 'src/assets/gyaemountain.jpeg',
    },
    {
        mntiname: '봉화산',
        mntilistno: '415901101',
        mntiimg: 'src/assets/bongmountain.jpeg',
    },
]);
</script>

<template>
    <div>
        <div class="col-lg-12 d-flex justify-content-between align-items-center flex-column">
            <img src="@/assets/bannergood.jpg" class="img-fluid rounded mx-auto d-block" alt="..." />
        </div>

        <div class="d-flex flex-column mt-5 align-items-center">
            <div class="d-flex justify-content-between align-items-center col-10">
                <p class="text-secondary fw-bold fs-4 px-5 m-0">아래 산들도 정복 해 보세요!</p>

                <router-link to="/search">
                    <button class="btn btn-secondary rounded-pill btn-lg fs-4" id="searchmtn">
                        산을 검색해 보세요 <i class="bi bi-search"></i>
                    </button>
                </router-link>
            </div>

            <div class="d-flex align-items-center col-10">
                <MainCard v-for="item in items" :key="item.mntilistno" :MainCard="item"></MainCard>
            </div>
            <div class="d-flex align-items-center col-10">
                <MainCard v-for="item in items2" :key="item.mntilistno" :MainCard="item"></MainCard>
            </div>
            <div class="d-flex" id="image">
                <img
                    id="first_snow"
                    src="src/assets/첫눈맞이등산.png"
                    class="img-fluid rounded mx-auto d-block"
                    alt="..."
                />
                <img
                    id="first_snow"
                    src="src/assets/겨울산행전대비.png"
                    class="img-fluid rounded mx-auto d-block"
                    alt="..."
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    max-width: 100%;
    height: 600px;
}

p {
    margin-left: 10%;
}

#searchmtn {
    margin-left: 500px;
}
#first_snow {
    width: 40%;
}
</style>
