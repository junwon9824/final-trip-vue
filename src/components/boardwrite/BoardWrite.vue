<script setup>
import axios from 'axios';
import { ref } from 'vue';

const mountains = ref([]);
const subject = ref('');
const content = ref('');
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

 // const getuserinfo = 

const insertData = async () => {
    // Implement the logic to insert data or perform an action
    console.log('Insert button clicked!');
    console.log('  subject:', subject.value);
    console.log('  content:', content.value);
    console.log('File Info:', editedFileInfo.value);

    const formData = new FormData();
    formData.append('upfile', editedFileInfo.value);

    try {
        
        const payload = {
            userId: sessionStorage.getItem('userId'),
            subject: subject.value,
            content: content.value
        };

        const response = await axios.post('http://localhost:80/article/write', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            params: payload // 문자열 데이터는 params에 넣어 전달합니다.
        });

        console.log("Response:", response.data);
 
        if (response.data) {
            // 처리 로직 추가
            console.log(response.data)
        }

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};


</script>

<template>
    <div class="container">
        <div class="card bg-info d-flex align-items-center rounded-4">
            <div class="card-body col-11">
                <input v-model="subject" class="form-control py-3 my-5" placeholder="제목" />

                <input v-model="content" class="form-control py-3 my-5" placeholder=" 내용" style="height: 600px" />

                <div>
                    <input type="file" @change="handleImageChange" class="form-control form-control-lg my-5"
                        accept="image/*" />
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
