<script setup>
import { ref } from 'vue';

const mountains = ref([]);
const editedMountainName = ref('');
const editedRegDate = ref('');
const editedFileInfo = ref('');

const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            editedFileInfo.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
};

const insertData = () => {
    // Implement the logic to insert data or perform an action
    console.log('Insert button clicked!');
    console.log('Mountain Name:', editedMountainName.value);
    console.log('Registration Date:', editedRegDate.value);
    console.log('File Info:', editedFileInfo.value);
};
</script>

<template>
    <div class="container">
        <div class="card bg-info d-flex align-items-center rounded-4">
            <div class="card-body col-11">
                <input v-model="editedMountainName" class="form-control py-3 my-5" placeholder="이름 Name" />

                <input
                    v-model="editedRegDate"
                    class="form-control py-3 my-5"
                    placeholder="등록일자 Date"
                    style="height: 600px"
                />

                <div>
                    <input
                        type="file"
                        @change="handleImageChange"
                        class="form-control form-control-lg my-5"
                        accept="image/*"
                    />
                    <img :src="editedFileInfo" class="img-fluid rounded d-block" />
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <button @click="insertData" class="btn btn-secondary btn-lg rounded-pill">
                        등록<i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
