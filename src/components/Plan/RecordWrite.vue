<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useMemberStore } from '@/stores/member';
import axios from 'axios';

const { userInfo } = storeToRefs(useMemberStore());
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

  writeitem(editedMountainName.value);
};

const writeitem = async () => {
  try {
    const payload = {
      word: editedMountainName.value,
      //   articleNo: ,
      content: editedRegDate.value,
      userId: userInfo.value.userId,
    };

    const response = await axios.post('http://localhost:80/article/write', payload);
    // Handle the response if needed
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
        <div class="card">
          <div class="card-body">
            <h1 class="card-title mb-4">
              <input v-model="editedMountainName" class="form-control" placeholder="제목" />
            </h1>

            <p class="card-text">
              <input v-model="editedRegDate" class="form-control" placeholder=" 내용" />
            </p>

            <div class="card-body">
              <input
                type="file"
                @change="handleImageChange"
                class="form-control"
                accept="image/*"
              />
              <img :src="editedFileInfo" class="img-fluid rounded mx-auto d-block" />
            </div>

            <button @click="insertData" class="btn btn-primary">등록</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn btn-primary {
  margin-left: 90%;
}
</style>
