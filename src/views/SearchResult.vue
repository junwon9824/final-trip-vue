<script setup>
import { ref } from 'vue';
import BoardSearchItem from '@/components/board/BoardSearchItem.vue'


const editedMountainName = ref('');

const searchMountain = () => {
    // Implement the logic for searching
    console.log('Searching for:', editedMountainName.value);
    // You can add more logic here based on your requirements


};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="card-body d-flex justify-content-center align-items-center">

                    <h1 class="card-title">
                        <input v-model="editedMountainName" class="form-control" style="width: 740px" placeholder=" 이름 검색  " />
                    </h1>

                    <button @click="searchMountain" class="btn btn-primary">Search</button>
                    <BoardSearchItem></BoardSearchItem>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn-primary {
    margin-top: 10px;
}
.container {
    margin-top: 12%;
}


</style>
