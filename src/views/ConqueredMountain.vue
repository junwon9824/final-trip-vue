<script setup>
import ConqueredBoard from '../components/Mypage/ConqueredBoard.vue';
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 mb-3 d-flex align-items-end justify-content-center">
                    <p class="text-center fw-bold fs-2 col-11">내가 정복한 산</p>
                </div>
            </div>

            <div>
                <ConqueredBoard></ConqueredBoard>
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
