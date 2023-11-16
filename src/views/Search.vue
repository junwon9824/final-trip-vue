<script setup> 
 import { ref } from 'vue';
import axios from 'axios';
// import BoardSearchItem from "../components/Search/item/BoardSearchItem.vue";
import MountainSearchItem from '../components/Search/item/MountainSearchItem.vue';

const editedMountainName = ref('');
const searchResult = ref([]);

const searchMountain = async () => {
    try {
        console.log(editedMountainName.value);
        const response = await axios.get('http://localhost:80/mountain/search', {
            params: {
                word: editedMountainName.value,
            },
        });

        console.log(response.data);

        // 결과를 searchResult에 할당
        searchResult.value = response.data;
        console.log(searchResult.value);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mx-auto">
                <div class="card-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="width: 720px">
                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                        <input
                            v-model="editedMountainName"
                            type="text"
                            class="form-control fs-4 m-0 py-1"
                            placeholder=" 이름 검색  "
                        />
                    </div>
 
                    <button @click="searchMountain" class="btn btn-primary btn-lg py-2 px-5 m-0 fw-bold">Search</button>
                </div>

                <table class="table table-hover border-primary">
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        <MountainSearchItem
                            v-for="result in searchResult"
                            :key="result.mntilistno"
                            :searchResult="result"
                        ></MountainSearchItem>
                    </tbody>
                </table>
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
    min-height: 60vh;
 }
</style>
